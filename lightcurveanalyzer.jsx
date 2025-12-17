import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Upload, X } from 'lucide-react';

const SatelliteLightCurveAnalyzer = () => {
  const [uploadedSignals, setUploadedSignals] = useState([]);
  const [testSignals, setTestSignals] = useState([]);
  const [selectedSignal, setSelectedSignal] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(0);

  useEffect(() => {
    generateTestSignals();
  }, []);

  const generateTestSignals = () => {
    const signals = [
      generateInvariantSignal(),
      generatePeriodicSignal(2.0),
      generatePeriodicSignal(5.0),
      generatePeriodicWithNoiseSignal(3.0, 0.3),
      generateAperiodicSignal(),
      generateComplexPeriodicSignal(),
      generateNoisyInvariantSignal(),
    ];
    setTestSignals(signals);
  };

  const generateInvariantSignal = () => {
    const fs = 10;
    const segments = [];
    let t = 0;
    
    for (let seg = 0; seg < 5; seg++) {
      const segment = [];
      for (let i = 0; i < 10 * fs; i++) {
        segment.push({
          time: t,
          magnitude: 12.5 + (Math.random() - 0.5) * 0.1,
        });
        t += 1/fs;
      }
      segments.push(segment);
      t += 4;
    }
    
    return {
      name: "Test: Invariante",
      type: "invariante",
      segments: segments,
      data: segments.flat(),
    };
  };

  const generatePeriodicSignal = (period) => {
    const fs = 10;
    const segments = [];
    let t = 0;
    
    for (let seg = 0; seg < 5; seg++) {
      const segment = [];
      for (let i = 0; i < 10 * fs; i++) {
        const magnitude = 12.0 + 0.5 * Math.sin(2 * Math.PI * t / period) + 
                         (Math.random() - 0.5) * 0.05;
        segment.push({ time: t, magnitude });
        t += 1/fs;
      }
      segments.push(segment);
      t += 4;
    }
    
    return {
      name: `Test: Periodico (T=${period}s)`,
      type: "periodico",
      period: period,
      segments: segments,
      data: segments.flat(),
    };
  };

  const generateAperiodicSignal = () => {
    const fs = 10;
    const segments = [];
    let t = 0;
    let mag = 12.0;
    
    for (let seg = 0; seg < 5; seg++) {
      const segment = [];
      for (let i = 0; i < 10 * fs; i++) {
        mag += (Math.random() - 0.5) * 0.3;
        mag = Math.max(11.5, Math.min(13.0, mag));
        segment.push({ time: t, magnitude: mag });
        t += 1/fs;
      }
      segments.push(segment);
      t += 4;
    }
    
    return {
      name: "Test: Aperiodico",
      type: "aperiodico",
      segments: segments,
      data: segments.flat(),
    };
  };

  const generateComplexPeriodicSignal = () => {
    const fs = 10;
    const segments = [];
    let t = 0;
    
    for (let seg = 0; seg < 5; seg++) {
      const segment = [];
      for (let i = 0; i < 10 * fs; i++) {
        const magnitude = 12.0 + 
                         0.4 * Math.sin(2 * Math.PI * t / 3.0) +
                         0.2 * Math.sin(2 * Math.PI * t / 1.5) +
                         (Math.random() - 0.5) * 0.05;
        segment.push({ time: t, magnitude });
        t += 1/fs;
      }
      segments.push(segment);
      t += 4;
    }
    
    return {
      name: "Test: Periodico Complesso",
      type: "periodico",
      period: 3.0,
      segments: segments,
      data: segments.flat(),
    };
  };

  const generateNoisyInvariantSignal = () => {
    const fs = 10;
    const segments = [];
    let t = 0;
    
    for (let seg = 0; seg < 5; seg++) {
      const segment = [];
      for (let i = 0; i < 10 * fs; i++) {
        segment.push({
          time: t,
          magnitude: 12.5 + (Math.random() - 0.5) * 0.5,
        });
        t += 1/fs;
      }
      segments.push(segment);
      t += 4;
    }
    
    return {
      name: "Test: Invariante + Rumore Forte",
      type: "invariante",
      segments: segments,
      data: segments.flat(),
    };
  };

  const generatePeriodicWithNoiseSignal = (period, noiseLevel) => {
    const fs = 10;
    const segments = [];
    let t = 0;
    
    for (let seg = 0; seg < 5; seg++) {
      const segment = [];
      for (let i = 0; i < 10 * fs; i++) {
        const magnitude = 12.0 + 0.5 * Math.sin(2 * Math.PI * t / period) + 
                         (Math.random() - 0.5) * noiseLevel;
        segment.push({ time: t, magnitude });
        t += 1/fs;
      }
      segments.push(segment);
      t += 4;
    }
    
    return {
      name: `Test: Periodico (T=${period}s) + Rumore σ=${noiseLevel}`,
      type: "periodico",
      period: period,
      segments: segments,
      data: segments.flat(),
    };
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const text = await file.text();
    const lines = text.trim().split('\n');
    const data = [];
    
    let startTime = null;
    
    for (const line of lines) {
      const parts = line.trim().split(/\s+/);
      if (parts.length >= 3) {
        try {
          // Cerca di parsare il timestamp (primo campo + secondo campo se è una data)
          let timestamp, magnitude;
          
          // Caso 1: timestamp numerico diretto (secondi)
          if (!isNaN(parseFloat(parts[0])) && parts[0].indexOf('-') === -1) {
            timestamp = parseFloat(parts[0]);
            magnitude = parseFloat(parts[1]);
          } 
          // Caso 2: data + timestamp (come i tuoi dati)
          else if (parts[0].indexOf('-') !== -1) {
            const dateTime = new Date(parts[0] + ' ' + parts[1]).getTime();
            if (startTime === null) startTime = dateTime;
            timestamp = (dateTime - startTime) / 1000;
            magnitude = parseFloat(parts[2]);
          }
          // Caso 3: due colonne: tempo, magnitudine
          else {
            timestamp = parseFloat(parts[0]);
            magnitude = parseFloat(parts[1]);
          }
          
          if (!isNaN(timestamp) && !isNaN(magnitude)) {
            data.push({ time: timestamp, magnitude });
          }
        } catch (e) {
          console.warn('Riga ignorata:', line);
        }
      }
    }
    
    if (data.length > 0) {
      const newSignal = {
        name: file.name,
        type: "caricato",
        data: data,
        segments: [data],
      };
      
      setUploadedSignals(prev => [...prev, newSignal]);
      setSelectedSignal({ type: 'uploaded', index: uploadedSignals.length });
      setFileInputKey(prev => prev + 1);
    } else {
      alert('Nessun dato valido trovato nel file');
    }
  };

  const removeUploadedSignal = (index) => {
    setUploadedSignals(prev => prev.filter((_, i) => i !== index));
    if (selectedSignal?.type === 'uploaded' && selectedSignal.index === index) {
      setSelectedSignal(null);
      setAnalysis(null);
    } else if (selectedSignal?.type === 'uploaded' && selectedSignal.index > index) {
      setSelectedSignal({ type: 'uploaded', index: selectedSignal.index - 1 });
    }
  };

  const computeFFT = (data) => {
    const N = data.length;
    const spectrum = [];
    const fs = 10;
    
    for (let k = 0; k < N/2; k++) {
      let real = 0, imag = 0;
      for (let n = 0; n < N; n++) {
        const angle = -2 * Math.PI * k * n / N;
        real += data[n] * Math.cos(angle);
        imag += data[n] * Math.sin(angle);
      }
      const magnitude = Math.sqrt(real * real + imag * imag) / N;
      const frequency = k * fs / N;
      spectrum.push({ frequency, power: magnitude });
    }
    
    return spectrum;
  };

  const computeAutocorrelation = (data) => {
    const mean = data.reduce((a, b) => a + b, 0) / data.length;
    const variance = data.reduce((sum, x) => sum + Math.pow(x - mean, 2), 0) / data.length;
    
    const maxLag = Math.min(100, Math.floor(data.length / 2));
    const acf = [];
    
    for (let lag = 0; lag < maxLag; lag++) {
      let sum = 0;
      for (let i = 0; i < data.length - lag; i++) {
        sum += (data[i] - mean) * (data[i + lag] - mean);
      }
      acf.push({
        lag: lag / 10,
        correlation: sum / ((data.length - lag) * variance)
      });
    }
    
    return acf;
  };

  const findPeriod = (times, magnitudes) => {
    const minPeriod = 0.5;
    const maxPeriod = 10.0;
    const steps = 200;
    const periodStep = (maxPeriod - minPeriod) / steps;
    
    let bestPeriod = 0;
    let minTheta = Infinity;
    const pdm = [];
    
    for (let i = 0; i < steps; i++) {
      const period = minPeriod + i * periodStep;
      const theta = computePDM(times, magnitudes, period);
      pdm.push({ period, theta });
      
      if (theta < minTheta) {
        minTheta = theta;
        bestPeriod = period;
      }
    }
    
    return { bestPeriod, pdm, minTheta };
  };

  const computePDM = (times, magnitudes, period) => {
    const nBins = 10;
    const bins = Array(nBins).fill(0).map(() => []);
    
    for (let i = 0; i < times.length; i++) {
      const phase = (times[i] % period) / period;
      const binIndex = Math.floor(phase * nBins) % nBins;
      bins[binIndex].push(magnitudes[i]);
    }
    
    let varWithin = 0;
    let count = 0;
    
    for (const bin of bins) {
      if (bin.length > 1) {
        const mean = bin.reduce((a, b) => a + b, 0) / bin.length;
        const variance = bin.reduce((sum, x) => sum + Math.pow(x - mean, 2), 0) / bin.length;
        varWithin += variance * bin.length;
        count += bin.length;
      }
    }
    
    const overallMean = magnitudes.reduce((a, b) => a + b, 0) / magnitudes.length;
    const overallVar = magnitudes.reduce((sum, x) => sum + Math.pow(x - overallMean, 2), 0) / magnitudes.length;
    
    return count > 0 ? varWithin / (count * overallVar) : 1;
  };

  const analyzeSignal = (signal) => {
    const magnitudes = signal.data.map(d => d.magnitude);
    const times = signal.data.map(d => d.time);
    
    const mean = magnitudes.reduce((a, b) => a + b, 0) / magnitudes.length;
    const variance = magnitudes.reduce((sum, x) => sum + Math.pow(x - mean, 2), 0) / magnitudes.length;
    const stdDev = Math.sqrt(variance);
    
    const n = magnitudes.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
    for (let i = 0; i < n; i++) {
      sumX += i;
      sumY += magnitudes[i];
      sumXY += i * magnitudes[i];
      sumX2 += i * i;
    }
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    
    const spectrum = computeFFT(magnitudes);
    const dominantFreq = spectrum.reduce((max, p) => 
      p.frequency > 0 && p.power > max.power ? p : max, 
      { frequency: 0, power: 0 }
    );
    
    const acf = computeAutocorrelation(magnitudes);
    
    const acfPeaks = [];
    for (let i = 1; i < acf.length - 1; i++) {
      if (acf[i].correlation > acf[i-1].correlation && 
          acf[i].correlation > acf[i+1].correlation &&
          acf[i].correlation > 0.3) {
        acfPeaks.push(acf[i]);
      }
    }
    
    const periodSearch = findPeriod(times, magnitudes);
    
    let classification = "Invariante";
    let confidence = 0;
    let estimatedPeriod = null;
    
    if (stdDev < 0.15) {
      classification = "Invariante";
      confidence = 1 - (stdDev / 0.15);
    } else {
      const isPeriodic = periodSearch.minTheta < 0.3 || 
                        (acfPeaks.length > 0 && acfPeaks[0].correlation > 0.5);
      
      if (isPeriodic) {
        classification = "Periodico";
        estimatedPeriod = periodSearch.bestPeriod;
        confidence = 1 - periodSearch.minTheta;
        
        if (acfPeaks.length > 0) {
          const acfPeriod = acfPeaks[0].lag;
          if (Math.abs(acfPeriod - estimatedPeriod) / estimatedPeriod < 0.2) {
            confidence = Math.max(confidence, acfPeaks[0].correlation);
          }
        }
      } else {
        classification = "Aperiodico";
        confidence = 0.7;
      }
    }
    
    return {
      classification,
      confidence,
      estimatedPeriod,
      statistics: {
        mean,
        stdDev,
        variance,
        slope,
      },
      spectrum,
      dominantFreq,
      acf,
      acfPeaks,
      periodSearch,
    };
  };

  useEffect(() => {
    if (selectedSignal !== null) {
      let signal;
      if (selectedSignal.type === 'test') {
        signal = testSignals[selectedSignal.index];
      } else {
        signal = uploadedSignals[selectedSignal.index];
      }
      
      if (signal) {
        const result = analyzeSignal(signal);
        setAnalysis(result);
      }
    }
  }, [selectedSignal, testSignals, uploadedSignals]);

  const getCurrentSignal = () => {
    if (!selectedSignal) return null;
    if (selectedSignal.type === 'test') {
      return testSignals[selectedSignal.index];
    } else {
      return uploadedSignals[selectedSignal.index];
    }
  };

  const currentSignal = getCurrentSignal();

  return (
    <div className="w-full min-h-screen overflow-auto bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Analizzatore Light Curves Satelliti
        </h1>
        
        {/* Upload Section */}
        <div className="mb-6 bg-slate-800/50 p-6 rounded-lg backdrop-blur border-2 border-dashed border-blue-500/50">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Carica la tua Light Curve
          </h2>
          <div className="mb-4">
            <label className="block mb-2 text-sm text-slate-300">
              Formato file: CSV/TXT con colonne separate da spazi o tab
            </label>
            <div className="text-xs text-slate-400 mb-3 space-y-1">
              <div>• <strong>Formato 1:</strong> timestamp(s) magnitudine</div>
              <div>• <strong>Formato 2:</strong> data ora magnitudine [altri campi...]</div>
              <div>• Esempio: <code className="bg-slate-700 px-1">2016-02-10 01:04:27.098 0.235 ...</code></div>
            </div>
            <input
              key={fileInputKey}
              type="file"
              accept=".csv,.txt,.dat"
              onChange={handleFileUpload}
              className="block w-full text-sm text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 file:cursor-pointer"
            />
          </div>
          
          {uploadedSignals.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-semibold mb-2">File Caricati:</h3>
              <div className="space-y-2">
                {uploadedSignals.map((sig, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-slate-700/50 p-2 rounded">
                    <span className="text-sm">{sig.name} ({sig.data.length} punti)</span>
                    <button
                      onClick={() => removeUploadedSignal(idx)}
                      className="p-1 hover:bg-red-500/20 rounded"
                    >
                      <X className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Signal Selection */}
        <div className="mb-6 bg-slate-800/50 p-4 rounded-lg backdrop-blur">
          <label className="block mb-2 font-semibold">Seleziona Segnale:</label>
          
          {uploadedSignals.length > 0 && (
            <>
              <div className="text-sm text-blue-400 mb-2 font-semibold">I TUOI FILE:</div>
              <div className="flex gap-2 flex-wrap mb-4">
                {uploadedSignals.map((sig, idx) => (
                  <button
                    key={`uploaded-${idx}`}
                    onClick={() => setSelectedSignal({ type: 'uploaded', index: idx })}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedSignal?.type === 'uploaded' && selectedSignal?.index === idx
                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                        : 'bg-slate-700 hover:bg-slate-600'
                    }`}
                  >
                    {sig.name}
                  </button>
                ))}
              </div>
            </>
          )}
          
          <div className="text-sm text-green-400 mb-2 font-semibold">SEGNALI DI TEST:</div>
          <div className="flex gap-2 flex-wrap">
            {testSignals.map((sig, idx) => (
              <button
                key={`test-${idx}`}
                onClick={() => setSelectedSignal({ type: 'test', index: idx })}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedSignal?.type === 'test' && selectedSignal?.index === idx
                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/50'
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              >
                {sig.name}
              </button>
            ))}
          </div>
        </div>

        {currentSignal && analysis && (
          <>
            {/* Results */}
            <div className="mb-6 bg-gradient-to-r from-slate-800/80 to-slate-700/80 p-6 rounded-lg backdrop-blur border border-slate-600">
              <h2 className="text-2xl font-bold mb-4">Risultato Analisi</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <div className="text-sm text-slate-400 mb-1">Classificazione</div>
                  <div className="text-2xl font-bold text-blue-400">{analysis.classification}</div>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <div className="text-sm text-slate-400 mb-1">Confidenza</div>
                  <div className="text-2xl font-bold text-green-400">
                    {(analysis.confidence * 100).toFixed(1)}%
                  </div>
                </div>
                {analysis.estimatedPeriod && (
                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <div className="text-sm text-slate-400 mb-1">Periodo Stimato</div>
                    <div className="text-2xl font-bold text-purple-400">
                      {analysis.estimatedPeriod.toFixed(2)}s
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-slate-400">Media:</span>{' '}
                  <span className="font-mono">{analysis.statistics.mean.toFixed(3)}</span>
                </div>
                <div>
                  <span className="text-slate-400">Std Dev:</span>{' '}
                  <span className="font-mono">{analysis.statistics.stdDev.toFixed(3)}</span>
                </div>
                <div>
                  <span className="text-slate-400">Punti:</span>{' '}
                  <span className="font-mono">{currentSignal.data.length}</span>
                </div>
                <div>
                  <span className="text-slate-400">Durata:</span>{' '}
                  <span className="font-mono">
                    {(currentSignal.data[currentSignal.data.length - 1].time - currentSignal.data[0].time).toFixed(1)}s
                  </span>
                </div>
              </div>
              
              {currentSignal.type && currentSignal.type !== 'caricato' && (
                <div className="mt-3 pt-3 border-t border-slate-600">
                  <span className="text-slate-400">Tipo Reale:</span>{' '}
                  <span className="font-semibold text-yellow-400">{currentSignal.type}</span>
                  {currentSignal.period && (
                    <>
                      {' | '}
                      <span className="text-slate-400">Periodo Reale:</span>{' '}
                      <span className="font-semibold text-yellow-400">{currentSignal.period}s</span>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Light Curve */}
            <div className="mb-6 bg-slate-800/50 p-4 rounded-lg backdrop-blur">
              <h3 className="text-xl font-bold mb-4">Light Curve</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={currentSignal.data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="time" 
                    type="number"
                    domain={['dataMin', 'dataMax']}
                    label={{ value: 'Tempo (s)', position: 'insideBottom', offset: -5, fill: '#9CA3AF' }}
                    stroke="#9CA3AF"
                  />
                  <YAxis 
                    reversed
                    domain={['dataMin - 0.2', 'dataMax + 0.2']}
                    label={{ value: 'Magnitudine', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }}
                    stroke="#9CA3AF"
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                    formatter={(value) => value.toFixed(3)}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="magnitude" 
                    stroke="#3B82F6" 
                    strokeWidth={2} 
                    dot={{ fill: '#3B82F6', r: 1 }}
                    connectNulls={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Spectrum */}
            <div className="mb-6 bg-slate-800/50 p-4 rounded-lg backdrop-blur">
              <h3 className="text-xl font-bold mb-4">Spettro di Potenza (FFT)</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={analysis.spectrum.slice(1, 50)}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="frequency"
                    label={{ value: 'Frequenza (Hz)', position: 'insideBottom', offset: -5, fill: '#9CA3AF' }}
                    stroke="#9CA3AF"
                  />
                  <YAxis 
                    label={{ value: 'Potenza', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }}
                    stroke="#9CA3AF"
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                    formatter={(value) => value.toFixed(4)}
                  />
                  <Line type="monotone" dataKey="power" stroke="#10B981" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Autocorrelation */}
            <div className="mb-6 bg-slate-800/50 p-4 rounded-lg backdrop-blur">
              <h3 className="text-xl font-bold mb-4">Autocorrelazione</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={analysis.acf}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="lag"
                    label={{ value: 'Lag (s)', position: 'insideBottom', offset: -5, fill: '#9CA3AF' }}
                    stroke="#9CA3AF"
                  />
                  <YAxis 
                    domain={[-1, 1]}
                    label={{ value: 'Correlazione', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }}
                    stroke="#9CA3AF"
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                    formatter={(value) => value.toFixed(3)}
                  />
                  <Line type="monotone" dataKey="correlation" stroke="#F59E0B" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* PDM */}
            <div className="mb-6 bg-slate-800/50 p-4 rounded-lg backdrop-blur">
              <h3 className="text-xl font-bold mb-4">Period Search (PDM)</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={analysis.periodSearch.pdm}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="period"
                    label={{ value: 'Periodo (s)', position: 'insideBottom', offset: -5, fill: '#9CA3AF' }}
                    stroke="#9CA3AF"
                  />
                  <YAxis 
                    label={{ value: 'Theta (PDM)', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }}
                    stroke="#9CA3AF"
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                    formatter={(value) => value.toFixed(4)}
                  />
                  <Line type="monotone" dataKey="theta" stroke="#8B5CF6" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-2 text-sm text-slate-400">
                Minimo globale (miglior periodo): {analysis.periodSearch.bestPeriod.toFixed(2)}s 
                (θ = {analysis.periodSearch.minTheta.toFixed(4)})
              </div>
            </div>
          </>
        )}

        {/* Info */}
        <div className="bg-slate-800/30 p-4 rounded-lg text-sm text-slate-300">
          <h3 className="font-bold mb-2">📖 Istruzioni:</h3>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li>Carica il tuo file CSV/TXT con timestamp e magnitudine</li>
            <li>L'analizzatore riconosce automaticamente diversi formati</li>
            <li>Confronta i tuoi dati con i segnali di test per validare l'algoritmo</li>
          </ul>
          
          <h3 className="font-bold mb-2 mt-4">🔬 Metodi di Analisi:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Analisi Statistica:</strong> Varianza e deviazione standard per rilevare variabilità</li>
            <li><strong>FFT:</strong> Trasformata di Fourier per identificare frequenze dominanti</li>
            <li><strong>Autocorrelazione:</strong> Rileva pattern ripetitivi nel segnale</li>
            <li><strong>PDM:</strong> Trova il periodo ottimale minimizzando la dispersione delle fasi</li>
          </ul>
          
          <div className="mt-3">
            <strong>⚙️ Criteri di Classificazione:</strong>
            <ul className="list-disc list-inside mt-1">
              <li><strong>Invariante:</strong> σ &lt; 0.15 mag (bassa variabilità)</li>
              <li><strong>Periodico:</strong> θ_PDM &lt; 0.3 o picco ACF &gt; 0.5 (segnale ripetitivo)</li>
              <li><strong>Aperiodico:</strong> Alta variabilità senza periodicità (tumbling satellite)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatelliteLightCurveAnalyzer; 
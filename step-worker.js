const base = 'https://cdn.jsdelivr.net/npm/occt-import-js@0.0.23/dist/';
let engine;
self.onmessage = async ({data}) => {
  try {
    if (!engine) {
      importScripts(base + 'occt-import-js.js');
      engine = await occtimportjs({locateFile: name => base + name});
    }
    const result = engine.ReadStepFile(new Uint8Array(data), null);
    if (!result.success || !result.meshes || !result.meshes.length) throw new Error('No viewable geometry was found in this STEP file.');
    self.postMessage({result});
  } catch (error) {
    self.postMessage({error: error.message || 'Could not read the STEP file.'});
  }
};

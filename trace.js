const trace = require('@zeit/node-file-trace');
//const input = 'zeit/api/api-handler.ts';
const input = 'api-handler.tsx';

trace([input], {
    base: process.cwd(),
    ts: true,
    mixedModules: true
})
    .then(o => console.log(o.fileList))
    .catch(console.error);
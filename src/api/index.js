export const modules = {};
(async() => {
  const moduleFiles = await import.meta.glob('./*.js')
  for (const path in moduleFiles) {
    const name = path.replace(/^\.\/(.*)\.\w+$/, '$1')
    modules[name] = (await moduleFiles[path]())
  }
})()
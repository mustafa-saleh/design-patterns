# Proxy Pattern

- Proxy provies a surrogate or a placeholder to another object to control access to it.
- Proxies are used to provide validation, security, caching, logging, ....
- Proxies must provide the same interface as the object
- In this example we implement Filesystem proxy(FS_Proxy) to only allow reading markdown files from fs.
- FS_Proxy class should implememnt all methods of fs module, but for previty we only implements readFile method

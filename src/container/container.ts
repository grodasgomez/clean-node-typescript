/**
 * Container class that holds all the dependencies for the application.
 * Inspired by [Magnus Tovslid's article](https://medium.com/@magnusjt/ioc-container-in-nodejs-e7aea8a89600)
 */
export default class Container<T> {
  private services: Partial<T> = {};

  service<K extends keyof T>(
    name: K,
    cbCreator: (c: Container<T> & T) => T[K]
  ): this {
    Object.defineProperty(this, name, {
      get: () => {
        if (!this.services[name]) {
          this.services[name] = cbCreator(this as unknown as Container<T> & T);
        }
        return this.services[name];
      },
      configurable: true,
    });

    return this;
  }
}

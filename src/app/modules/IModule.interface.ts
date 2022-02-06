export interface IModule {
  id?: string,
  name: string,
  class?: string,
  source?: string,
  description?: string,
  declarations?: Array<IClassRefrence>,
  imports?: Array<IClassRefrence>,
  exports?: Array<IClassRefrence>,
  providers?: Array<IClassRefrence>,
}

export interface IClassRefrence {
  name: string,
  path?: string
}

/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare module "text!*.json" {
    const value: any;
    export default value;
}

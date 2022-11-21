export class SlobyBaseTool {
  initializeTool(tool: string) {
    console.log(`${tool} has been initialized`)
  } 
  
  status() {
    return "success "   
  }
}
// export abstract class SlobyBaseTool {
//   abstract initializeTool(tool: string): any
//   abstract status(): string
// }
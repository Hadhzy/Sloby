import BaseBluePrint from '../../../components/blueprint/blueprint_base_component';

export default function BluePrintPage() {
  const blueprint = new BaseBluePrint(); // create a new blueprint
  return blueprint.render();
}

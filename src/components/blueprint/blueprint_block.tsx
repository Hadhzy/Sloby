import {motion, useDragControls} from "framer-motion";

// attributes from the BlueprintObject
type TAttributes = {
  name: string;
  color: string;
  output: boolean;
}

export default function BluePrintObject(attributes: TAttributes, w:string = "w-screen", h:string = "h-screen"){
    /**
     * This component is used to be the actual object on the screen.
     -------------------------------
        * @param name: name of the object
        * @param color: color of the object
        *  @param output: is the object an output
     -------------------------------
      */
   // create width and height


  // get the attributes from the object
  const {name, color, output} = attributes; // object destructuring
  const controls = useDragControls() // create a drag control hook

  function startDrag(event: any){
      controls.start(event)
  }

    return (
        <motion.div drag = {true }  dragMomentum={false} onPointerDown={startDrag} dragControls={controls} className={`${h} ${w} text-white`}>
        <div className="flex w-36 flex-col rounded-xl bg-dark-darker">

        <p className="to-bg-dark-border rounded-t-xl bg-gradient-to-r from-indigo-500 px-2 py-1">setColor</p>

        <div className="p-2 flex flex-col gap-1">

          <div className="flex items-center gap-1">
          <svg className="w-3 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="1.5" />
          </svg>

          <p>{name}</p>

          <p className="w-full text-right text-gray-800">{color}</p>

        </div>

        <div className="flex items-center gap-1">
          <p className="w-full text-right">{output}</p>

          <svg className="w-3 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="1.5" />
          </svg>

      </div>
    </div>
  </div>
</motion.div>
    )
}
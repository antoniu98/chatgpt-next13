import { SunIcon } from "@heroicons/react/24/outline";

export default function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex text-center">
        <div>
          {/* Sun */}
          <div className="flex flex-col mb-5 items-center">
            <SunIcon className=" h-20 w-20" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Explain smth to me SUN1</p>
            <p className="infoText">Explain smth to me SUN2</p>
            <p className="infoText">Explain smth to me SUN3</p>
          </div>
        </div>

        <div>
        {/* Sun */}
        <div className="flex flex-col mb-5 items-center">
          <SunIcon className=" h-20 w-20" />
          <h2>Examples</h2>
        </div>
        <div className="space-y-2">
          <p className="infoText">Explain smth to me SUN1</p>
          <p className="infoText">Explain smth to me SUN2</p>
          <p className="infoText">Explain smth to me SUN3</p>
        </div>
      </div>

        <div>
          {/* Sun */}
          <div className="flex flex-col mb-5 items-center">
            <SunIcon className=" h-20 w-20" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Explain smth to me SUN1</p>
            <p className="infoText">Explain smth to me SUN2</p>
            <p className="infoText">Explain smth to me SUN3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

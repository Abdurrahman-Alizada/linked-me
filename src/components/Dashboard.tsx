import { Card, CardContent } from "./ui/card";
import map from "../assets/map-sample.png";


const Dashboard = () => {
  return (
    <div className="relative">
      
      <div className="flex justify-center">
        <Card className="w-full xl:w-[520px] rounded-xl shadow-lg bg-white">
          <CardContent className="p-4">
            <h2 className="text-xl font-bold text-pink-500 mb-1">Biogram</h2>
            <h3 className="text-md font-bold text-black mb-0.5">Overview</h3>
            <h3 className="text-sm text-black mb-3">You reached 0% more accounts for the last 30 days</h3>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-pink-100 py-3 px-2 rounded-md font-bold text-base xl:text-lg">8.5M <br/> <span className="text-xs xl:text-sm font-medium">Reach</span></div>
              <div className="bg-pink-100 py-3 px-2 rounded-md font-bold text-base xl:text-lg">8.5M <br/> <span className="text-xs xl:text-sm font-medium">Link Clicks</span></div>
              <div className="bg-pink-100 py-3 px-2 rounded-md font-bold text-base xl:text-lg">8.5M <br/> <span className="text-xs xl:text-sm font-medium">Profile Visits</span></div>
            </div>
            <div className="mt-3">
              <p className="text-gray-700 font-medium mb-2">Top Locations</p>
              <div className="flex justify-center">
                <img
                  src={map}
                  alt="Top locations map"
                  className="rounded-md w-full max-w-[280px] h-auto"
                />
              </div>
              <div className="mt-2 text-sm text-gray-600">
                <strong>80K</strong> - America (US)
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
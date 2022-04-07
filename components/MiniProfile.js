function MiniProfile() {
    return(
        <div className="flex items-center justify-between mt-14 ml-10">
            <img 
            className="w-16 h-16 rounded-full border p-[2px]"
             src="https://assets1.ignimgs.com/2014/05/05/from-software-logojpg-9aaead_1280w.jpg"  // MiniProfile pic
             alt="" />

             <div className="flex-1 mx-4">
                 <h2 className="font-bold">FromSoftware</h2>
                 <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
             </div>

             <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
        </div>
    );
}

export default MiniProfile;
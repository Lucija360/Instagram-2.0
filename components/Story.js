function Story({ img, username }) {
    return(
        <div>
            <img className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out" // Image bubble of story with stylized className
            src={img}                                                                                                // hover effect here.....................................
            alt="" 
            /> 
            <p className="text-xs w-14 truncate text-center">{username}</p>  {/* Username shown below a story when it shows up in a scrollbar */}
        </div>
    );
}
export default Story
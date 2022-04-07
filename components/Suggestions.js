import {useEffect, useState} from "react";
import faker from "faker";

function Suggestions() {

    const [suggestions, setSuggestions] = useState([]);

    useEffect(()=> {
        const suggestions= [...Array(5)].map((_, i) =>(
            {
                ...faker.helpers.contextualCard(), // fake data being pulled in from faker.js which isn't supported anymore(currently only not working for fake avatar data)
                id: i,
            }
        ));

        setSuggestions(suggestions);
    },[]);

    return(
    
    <div className="mt-4 ml-10">
         <div className="flex justify-between text-sm mb-5 ">
             <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3> {/* Styled  */}
             <button className="text-gray-600 font-semibold">See All</button> {/* Styled see all btn  */}
         </div>

         {
             suggestions.map((profile) => (
                <div 
                key={profile.id} 
                className="flex items-center justify-between mt-3"
                >
                 <img 
                 className="w-10 h-10 rounded-full border p-[2px]" 
                 src={profile.avatar} // gives the pictures(profile pic) in Suggestions list but its not being shown cuz faker.js is down
                 alt="" 
                 />   

                 <div className="flex-1 ml-10">
                     <h2 
                     className="font-semibold text-sm">
                         {profile.username}</h2> {/* Shows username of fake profiles that are being pulled from faker.js  */}
                     <h3 
                     className="text-xs text-gray-400">Works at {profile.company.name}</h3> {/* Fake Data & company name displayed */}
                     </div>
                     <button className="text-blue-400 text-xs font-bold">
                         Follow
                     </button>
                 </div>
             ))
         }
        </div>
    );
}

export default Suggestions;
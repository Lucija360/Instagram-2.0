import faker from "faker"; // install it via npm i faker + make sure to import faker
import { useEffect, useState } from "react";
import Story from "./Story";
import  {useSession} from "next-auth/react";

// install npm install --save-dev tailwind-scrollbar and add it into plugins

function Stories() {

    const[suggestions, setSuggestions] = useState([]);
    const { data: session} = useSession();
   

useEffect(() => {     // loops 20 times through an empty array
 const suggestions = [...Array(20)].map((_, i) => ({ // 20 fake profiles // change it to 25, you get 25 fake profiles from faker.js (https://github.com/faker-js/faker)
     ...faker.helpers.contextualCard(), 
     id: i, // by refreshing local host you always get new 20 arrays / fake profiles
 }));
 
 setSuggestions(suggestions); // if you console log you will see the array of data with fake profiles(name, username and avatar)
}, []); // with console log you can make sure that there is actual data being pulled form faker




    return(
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">

            {session && (
                <Story img={session.user.image}
                username={session.user.username} />
            )}

            {suggestions.map((profile) => (
                <Story 
                key={profile.id}  // always add a key because it helps rendering(doesn't render everything again, only renders the newest element)
                img={profile.avatar} // no avatar image because the author wiped out the whole project and the domain has expired(https://stackoverflow.com/questions/70345093/faker-avatar-is-not-working-in-my-project)
                username={profile.username}
                 />  
            ))}
            
        </div>
    );

    }
export default Stories;
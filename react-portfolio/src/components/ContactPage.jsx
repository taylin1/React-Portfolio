import React from "react";

function ProjectPage(){
    return(
<>

{<section id="contact" className="py-20 bg-gray-200 ">
<h2 className="text-4xl font-bold text-indigo-600 mb-5 text-center">Contact Me:</h2>
    <form className="flex flex-col max-w-md mx-auto gap-4">
        <label className="font-bold text-lg text-indigo-500">Name:</label>
        <input type="text" placeholder="Name" className="border border-black-300 rounded-lg p-3" required></input>
        <label className="p-3 font-bold text-indigo-500">Email:</label>
        <input type="username" placeholder="Email" className="border border-black-300 rounded-lg p-3" required></input>
        <label className="p-3 font-bold text-lg text-indigo-500">Message:</label>
        <textarea placeholder="Message" className="border-3 border-blue-900 p-3 rounded-lg" required></textarea>
    </form>
</section>}
</>
    )
}

export default ProjectPage;
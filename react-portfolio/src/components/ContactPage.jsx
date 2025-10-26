import React from "react";

function ContactPage(){
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
    <div className="mt-8 text-gray-700">
        <p className="text-indigo-600 font-bold text-center text-lg">or connect with me:</p>
        <div className="flex justify-center gap-6 mt-3">
            {/*icon for github*/}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            <a href="https://github.com/taylin1/React-Portfolio" target="_blank" className="hover:text-indigo-600 font-bold">GitHub</a>
            {/*icon for linkedin*/}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            <a href="https://www.linkedin.com/in/taylin-damonze-298629234/" target="_blank" className="hover:text-indigo-600 font-bold">LinkedIn</a>
        </div>
      </div>
</section>}
</>
    )
}

export default ContactPage;
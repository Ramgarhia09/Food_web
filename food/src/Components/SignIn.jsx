import React from 'react'
// import "./firm.css"

const SignIn = () => {
  return (
    
    <div class="flex justify-center items-center h-[70vh] bg-indigo-300">
    <div class="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 class="text-3xl block text-center font-semibold"><i class="fa-solid fa-user"></i>Sign IN</h1>
       < hr class="mt-3"/>
        <div class="mt-3">
            <label for="name" class="block text-base mb-2">FullName</label>
            <input type="text" id="FullName" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter FullName..." />
        </div>
        <div class="mt-3">
            <label for="email" class="block text-base mb-2">Email</label>
            <input type="email" id="email" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Email..." />
        </div>
        <div class="mt-3">
            <label for="password" class="block text-base mb-2">Password</label>
            <input type="password" id="password" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password..." />
        </div>
        <div class="mt-3 flex justify-between items-center">
            <div>
               < input type="checkbox"/>
                <label>Remember Me</label>
            </div>
            <div>
                <a href="#" class="text-indigo-800 font-semibold">Forgot Password?</a>
            </div>
        </div>
        <div class="mt-5">
            <button type="submit" class="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"><i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Sign IN</button>
        </div>
    </div>
</div>


    
  )
}

export default SignIn
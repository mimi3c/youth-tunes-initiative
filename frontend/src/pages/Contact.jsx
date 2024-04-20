import {useRef} from 'react';


const Contact = ()=> {
   const form = useRef()


   const sendEmail = () => {};
   return (


        <div>
        <div className="bg-black justify-center h-[92vh] items-center flex-col flex">
                <div className="absolute w-full h-[92vh] overflow-clip">
                    <img src="" alt="" className="opacity-80 w-full h-full object-cover"/>
                </div>
                <h1 className="text-sea font-shrikhand text-5xl text-center w-11/12 z-30">
                    GET IN TOUCH
                </h1>
                <p className="text-white w-3/6 text-center font-ubuntu font-normal mx-auto z-30">
                    <br />
                    Explore our platform to discover engaging projects that focus on bringing the 
                    transformative gift of music to children in various communities.
                </p>
            </div>
            <div h-50>
                <h1 className="text-white text-8xl"> hello</h1>
            </div>
        <div className="bg-white w-full h-full p-0 m-0">
               <form ref={form} onSubmit={sendEmail} className="form-control card flex-center dir-column" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                   <input type="text" placeholder='Full Name' name='user_name' style={{width: '50%', marginBottom: '10px', borderColor: 'black', borderWidth: '1px'}} required />
                   <input type="email" placeholder='Email' name='user_email' style={{width: '50%', marginBottom: '10px', borderColor: 'black', borderWidth: '1px'}} required />
                   <input type="text" placeholder='Subject' name='subject' style={{width: '50%', marginBottom: '10px', borderColor: 'black', borderWidth: '1px'}} required />
                   <textarea name="message" cols="30" rows="10" style={{width: '50%', marginBottom: '10px', borderColor: 'black', borderWidth: '1px'}}></textarea>
                   <div className="flex justify-center items-center h-3/4 w-full">
                   <button type="submit" className="bg-night text-white font-ubuntu rounded-3xl mt-4 p-5 px-7 justify-self-center w-max-content"onClick={() => {}}>Send Message</button>
                   </div>
                   <div className="bg-white w-full h-2/3">
                        <h1 className="text-white">hello</h1>
                   </div>
               </form>
           </div>
       </div>
   )
}


export default Contact
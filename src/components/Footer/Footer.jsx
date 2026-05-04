export default function Footer(){
    return (
        <div className='flex flex-col gap-10 text-white/70 px-36 bg-black py-20 border border-gray-100/30'>
                
                <div>
                    <a href="">Questions? Call 000-800-919-1743 (Toll-Free)</a>
                </div>

                <div className='flex flex-col md:flex-row justify-between underline decoration-inherit'>

                    <div className='flex flex-col gap-5'>
                        <div>
                            <a href="">FAQ</a>
                        </div>
                        <div>
                            <a href="">Cookie Preferences</a>
                        </div>                    
                    </div>

                    <div className='flex flex-col gap-5'>
                        <div>
                            <a href="">Help Centre</a>
                        </div>
                        <div>
                            <a href="">Corporate Information</a>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <div>
                            <a href="">Terms of Use</a>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <div>
                            <a href="">Privacy</a>
                        </div>
                    </div>
                </div>

                <div>
                    <button className='font-bold border border-white rounded-md p-2'>
                        文A English ▼
                    </button>
                </div>
            </div>
    )
}
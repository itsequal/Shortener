// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
    return (
    <header className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col ">
            <img src="logo.png" alt="Company Logo" className="logo" />
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
    </header>


)
  }
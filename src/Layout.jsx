import RoutesApp from "./RoutesApp"
import NavBar from './shared/components/navbar'
import Footer from './shared/components/footer'
import { Toaster } from "sonner";
// import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
           <Toaster richColors closeButton />

      {/* Navbar */}
      <header>
        <NavBar />
      </header>

      {/* Main content */}
      <main className="flex-1">
        <RoutesApp />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

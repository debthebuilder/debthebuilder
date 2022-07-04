import Footer from "./Footer"

export default function Layout({children}) {
    return(
        <>
            <div className="w-full px-5 md:px-12 mb-10">
                {children}
            </div>
            <Footer />
        </>
    )
}
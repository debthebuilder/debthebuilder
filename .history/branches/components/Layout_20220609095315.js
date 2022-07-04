import Footer from "./Footer"

export default function Layout({children}) {
    return(
        <>
            <div className="px-12 mb-10">
                {children}
            </div>
            <Footer />
        </>
    )
}
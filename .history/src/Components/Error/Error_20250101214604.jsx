export default function Error() {
    return (
        <>
            <section className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 p-8">
                <div className="container flex flex-col items-center justify-center px-6 mx-auto my-8">
                    <div className="max-w-lg text-center bg-white dark:bg-gray-900 rounded-lg shadow-2xl p-8 transform transition duration-500 hover:scale-105 hover:shadow-xl">
                        <h2 className="mb-8 font-extrabold text-9xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-600 animate__animated animate__fadeIn">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100 md:text-3xl mb-4 animate__animated animate__fadeIn animate__delay-1s">
                            Oops! We couldn't find that page.
                        </p>
                        <p className="mt-4 mb-8 text-lg text-gray-600 dark:text-gray-400 animate__animated animate__fadeIn animate__delay-1.5s">
                            But don't worry, you can find plenty of other things on our homepage.
                        </p>
                        <a
                            href="/"
                            className="px-8 py-3 font-semibold rounded-lg bg-violet-600 text-gray-50 transition duration-300 transform hover:scale-110 hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-300 shadow-lg shadow-violet-500/50 animate__animated animate__fadeIn animate__delay-2s"
                        >
                            Back to homepage
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
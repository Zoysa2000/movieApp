import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";

const Display = () => {
    const movieDetails = useSelector((state) => state.action.movies);
    const { id } = useParams();
    const [trailerUrl, setTrailerUrl] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const selectedMovie = movieDetails.find((movie) => movie.movie.id === parseInt(id));
        if (selectedMovie) {
            const fetchTrailer = async (movieTitle) => {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${movieTitle}+trailer&type=video&key=AIzaSyCLF7N0KulN4oOS2br77eb51ybKCZRhomc`
                );
                const data = await response.json();
                if (data.items.length > 0) {
                    const videoId = data.items[0].id.videoId;
                    setTrailerUrl(`https://www.youtube.com/embed/${videoId}`);
                } else {
                    setTrailerUrl(""); // No trailer found
                }
            };

            fetchTrailer(selectedMovie.movie.title);
            setImageUrl(selectedMovie.movie.posterPath);
        }
    }, [id, movieDetails]);  // Dependency on `id` and `movieDetails`

    const selectedMovie = movieDetails.find((movie) => movie.movie.id === parseInt(id));

    if (!selectedMovie) {
        return <p className="text-4xl text-white">No movie details available</p>;
    }

    return (
        <div>
            <div
                className="md:h-[95vh] h-[70vh] bg-cover bg-center relative"
                style={{
                    backgroundImage: `url('https://image.tmdb.org/t/p/original${selectedMovie.movie.backdropPath}')`
                }}
            >
                <div
                    className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-black/90 via-black/30 to-black/90"></div>
                <div
                    className="relative z-10 flex flex-col text-center px-5 justify-center items-center w-full md:w-[85%] max-w-[800px] text-white h-full mx-auto gap-2">
                    <h1 className="max-w-screen-sm title">{selectedMovie.movie.title}</h1>
                    <p className="md:py-[12px] md:text-[30px]">Watch anywhere. Cancel anytime.</p>
                    <p className="md:text-[1.2rem] md:text-[25px] font-light">
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>
                    <div className="hidden md:block">
                        <ReactStars
                            count={10}
                            size={80}
                            activeColor="#ffd700"
                            value={Math.floor(selectedMovie.movie.voteAverage)}
                            edit={false}
                        />
                    </div>
                    <div className="block md:hidden">
                        <ReactStars
                            count={10}
                            size={40}
                            activeColor="#ffd700"
                            value={Math.floor(selectedMovie.movie.voteAverage)}
                            edit={false}
                        />
                    </div>
                </div>
            </div>

            <div className="border">
                <div
                    className="flex md:flex-row flex-col text-white justify-between py-10 md:gap-[40px] max-w-[1300px] px-5 mx-auto items-center">
                    <div className="md:w-[52%]">
                        <h1 className="title">Overview of {selectedMovie.movie.title}</h1>
                        <p className="text-[20px] mt-3 text-justify">{selectedMovie.movie.overview}</p>
                    </div>
                    <div className="md:w-[48%] w-full">
                        <div className="my-3">
                            <iframe
                                width="100%"
                                height="400"
                                src={trailerUrl}
                                title="YouTube trailer"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border">
                <div
                    className='flex flex-col  justify-center text-white md:flex-row max-w-[1300px] md:gap-[100px] items-center mx-auto py-16 md:py-0 md:pb-[40px] px-5'>
                    <div className="relative w-full md:w-[48%]">
                        <img className="w-full h-[400px] rounded-lg  md:py-10"
                             src={`https://image.tmdb.org/t/p/original${imageUrl}`}
                             alt=""/>
                    </div>

                    <div className="md:w-[52%] w-full text-center md:text-left mt-5 md:mt-0">
                        <h1 className="pb-3 title">Download your shows to watch offline.</h1>
                        <p className="subtitle">Save your favorites easily and always have something to watch.</p>
                    </div>

                </div>
            </div>
            <div className="mb-5"></div>
        </div>
    );
};

export default Display;




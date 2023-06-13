import "./styleAbout.css"

function AboutUs(){
    return(
        <>
            <section className="header-session">
                <div className="banner">
                    <div className="content">
                        <div className="text">
                        <h2> KAMI PERCAYA TUBUH YANG SEHAT </h2>
                        <h2> MEMBUTUHKAN MAKANAN YANG SEHAT </h2> 
                        <h2> SERTA MAKANAN YANG SEHAT MEMBUTUHKAN PLANET YANG SEHAT.</h2>
                        </div>
                        <p>Karena makanan dan minuman yang kita pilih akan berdampak pada kesehatan kita sendiri dan juga kesehatan planet kita.</p>
                    </div>
                </div>
            </section>

            <section className="session">
                <h1>Setiap Kita Makan Dan Minum, Kita Dapat Menentukan 
                    Dunia Seperti Apa Yang Kita Inginkan</h1>
                <div className="about">
                    <div className="image-cewe">
                        <img 
                            src="https://i.ibb.co/c6hsZV7/Pensive-housewife-holds-green-bok.webp"
                            alt="Pensive-housewife-holds-green-bok"
                            id="img-show"
                        />
                    </div>
                    <div className="deskripsi">
                        <h3>Kami mengajak seluruh masyarakat Indonesia untuk bekerja sama dan berpartisipasi dalam gerakan ini bersama-sama. 
                            Sebuah gerakan yang bertujuan untuk mendorong penerapan kebiasaan makan dan minum yang lebih sehat dan berkelanjutan.</h3>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        <button className="btn-rekomen">Cek Rekomendasi Makanan Anda</button>
                    </div>
                </div>
            </section>

            <section className="card-session">
                <div className="container">
                    <h1>NILAI KAMI</h1>
                    <h5>HOPE: Humanism, Openness, Proximity, dan Enthusiasm</h5>
                    <p>Ini bukanlah hanya sekadar slogan. Ini adalah pengingat tujuan kami dan apa yang kami perjuangkan, di atas dan di luar dari tujuan komersial kami. 
                        Keempat Nilai tersebut menjadi panduan kami dalam berperilaku setiap hari, cara bekerja, serta demi kemajuan dalam bisnis kami.</p>
                    <div className="row my-5">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body pertama">
                                    <h4 className="card-tittle">HUMANISM</h4>
                                    <h6>Humanisme</h6>
                                    <p className="card-text">Berbagi tanggung jawab, Ramah</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body kedua">
                                    <h4 className="card-tittle">OPENNESS</h4>
                                    <h6>Keterbukaan</h6>
                                    <p className="card-text">Keingintahuan, Kegesitan, Dialog</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body ketiga">
                                    <h4 className="card-tittle">PROXIMITY</h4>
                                    <h6>Kedekatan</h6>
                                    <p className="card-text">Aksesibilitas, Keaslian, Empati</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body keempat">
                                    <h4 className="card-tittle">ENTHUASIASM</h4>
                                    <h6>Antusiasme</h6>
                                    <p className="card-text">Keberanian, Semangat dan Ulet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="category">
			<div className="container p-5">
				<h3>DICA TEAM</h3>
                    <div className="row text-center g-4">
                        <div className="col-md">
                            <div className="icon"><img src="https://img.freepik.com/free-vector/cute-monkey-working-laptop_138676-3304.jpg?w=2000" alt="skincare"/></div>
                            <h6>MUHAMAD RAFFI</h6>
                        </div>
                        <div className="col-md">
                            <div className="icon"><img src="https://img.freepik.com/free-vector/cute-monkey-working-laptop_138676-3304.jpg?w=2000" alt="makeup"/></div>
                            <h6>HUMAIDI HAMBALI</h6>
                        </div>
                        <div className="col-md">
                            <div className="icon"><img src="https://img.freepik.com/free-vector/cute-monkey-working-laptop_138676-3304.jpg?w=2000" alt="haircare"/></div>
                            <h6>I KOMANG KRISNU ARTHA</h6>
                        </div>
                        <div className="col-md">
                            <div className="icon"><img src="https://img.freepik.com/free-vector/cute-monkey-working-laptop_138676-3304.jpg?w=2000" alt="bodycare"/></div>
                            <h6>MUSTAFA SURYA SYAHPUTRA</h6>
                        </div>
                        <div className="col-md">
                            <div className="icon"><img src="https://img.freepik.com/free-vector/cute-monkey-working-laptop_138676-3304.jpg?w=2000" alt="bodycare"/></div>
                            <h6>NI PUTU DIAN PUSPITA UTAMI</h6>
                        </div>
                    </div>
				</div>
		</section>
        </>
    )
}

export default AboutUs;
import React, {useEffect} from "react";
import logo from '../../assets/logo.png';
import './Word.css';
import dg from '../../assets/dg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Word() {
    useEffect(() => {
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          offset: 160, // Adjust the offset as needed
        });
      }, []);
    return (
        <div className="word mt-8 p-20">
            <div className=' flex items-center justify-center aos-init aos-animate pb-4 ' data-aos="zoom-in" data-aos-offset="160">
                <img src={logo} alt='logo' />
            </div>
            <div className="grid grid-cols-2 dico gap-4 my-8"  data-aos="zoom-in" data-aos-offset="160">
                <span></span>
                <span></span>
            </div>
            <div className="flex items-center" data-aos="zoom-in" data-aos-offset="160">
                <div className="basis-1/4 mr-4" >
                    <img src={dg} alt="dg" className="mb-4" />
                    <h1 className="text-4xl my-4">Adel Bentoumi</h1>
                    <p className="dg font-semibold">Président Directeur Général</p>
                </div>
                <div className="basis-3/4 ml-4">
                    <h1 className="text-4xl my-4">Word for Startups</h1>
                    <p className="font-semibold word-dg py-6">

                        Algérie Télécom est une société par actions à capitaux publics opérant dans le domaine des télécommunications, de la téléphonie fixe et d’internet. Sa naissance a été consacrée par la loi 2000/03 du 5 août 2000, relative à la restructuration du secteur des Postes et Télécommunications, qui sépare notamment les activités Postales de celles des Télécommunications et fixant les règles générales relatives à la poste et aux télécommunications ainsi que les résolutions du conseil national aux participations de l’état (CNPE) du 1er Mars 2001 portant création d’une Entreprise Publique Économique dénommée « Algérie Télécom ».
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 dico gap-4  my-8">
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
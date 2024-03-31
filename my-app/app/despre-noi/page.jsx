import Image from "next/image";

export default function DespreNoi() {
  return (
    <section className="container mx-auto pt-[120px] mb-16">
      <h1 className="text-xl mb-5 mx-auto md:mx-0 text-white bg-accent px-4 py-2 rounded-lg text-center w-fit">
        Despre Noi - Istoria RATBV
      </h1>
      <div>
        <h2 className="text-xl font-semibold md:text-left text-center mb-5">
          Transoprtul Public In Brasov
        </h2>
        <figure className="flex flex-col items-center md:float-right mb-6 md:ml-12">
          <Image
            src="/images/despre-noi/1.png"
            width={400}
            height={250}
            className="shadow-md"
            alt="Autobuz Ford"
          />
          <figcaption className="text-center text-gray-500 italic text-xs mt-5">
            Fig. 1 - Autobuz Ford 1940
          </figcaption>
        </figure>
        <p className="tracking-wide py-2">
          <span className="text-accent text-left font-semibold mr-5">
            1830 - 1840
          </span>{" "}
          Apar primele mijloace de transport public în interiorul oraşului
          Braşov (birje, trăsuri);
        </p>

        <p className="tracking-wide text-justify py-2">
          <span className="text-accent text-left font-semibold mr-5">1925</span>
          Se introduce în Braşov transportul urban de călători cu autobuze.
          Primul concesionar al Primăriei Braşov a fost firma Decei-Blaga din
          Cluj, care a pus în circulaţie patru autobuze pe două linii: Piaţa
          Unirii – Gara Braşov (14 staţii) şi Piaţa Unirii – Gara Bartolomeu (9
          staţii).
        </p>
        <p className="tracking-wide text-justify py-2">
          <span className="text-accent text-left font-semibold mr-5">1926</span>
          Existau nouă proprietari de autobuze, care au obţinut concesiunea
          pentru circulaţie şi transport public. Consiliul Municipal a limitat
          numărul de autobuze la numai 30, pentru evitarea accidentelor de
          circulaţie.
        </p>

        <p className="tracking-wide text-justify py-2">
          <span className="text-accent text-left font-semibold mr-5">1927</span>
          Primăria Municipiului Braşov elaborează primul{" "}
          <em className="text-italic text-gray-500">
            Regulament pentru circulaţia autobuzelor în localitate.
          </em>
        </p>
        <p className="tracking-wide text-justify py-2">
          <span className="text-accent font-semibold text-left w-[200px] mr-5">
            1 Iulie 1930
          </span>
          Primăria Municipiului Braşov concesionează toate autobuzele, în
          încercarea de a înfiinţa o regie proprie de exploatare a autobuzelor,
          însă, în 1931, Primăria Braşov renunţă la exploatarea în regie proprie
          a autobuzelor din cauza sumei de 25 milioane lei ce trebuia asigurată
          pentru organizarea societăţii.
        </p>
        <p className="tracking-wide text-justify py-2">
          <span className="text-accent text-left font-semibold text-left w-[200px] mr-5">
            1938
          </span>
          Primăria Oraşului Braşov, înfiinţează,{" "}
          <em className="text-italic text-gray-500">
            "Regia Întreprinderilor din Municipiul Braşov”
          </em>{" "}
          cunoscută sub denumirea R.I.M.B. În cadrul întreprinderii funcţiona şi
          secţia de transport în comun, care avea în dotare un număr de 35
          autobuze ce deserveau trei trasee în lungime totală de 17 km:
          Prund-Astra; Prund-Gară (gara veche) şi Prund-Bartolomeu. Se
          transportau anual 5,4 milioane de călători.
        </p>
        <figure className="flex flex-col items-center md:float-left my-6 md:mr-12">
          <Image
            src="/images/despre-noi/2.jpg"
            width={400}
            height={250}
            className="shadow-md"
            alt="Autobuz Skoda"
          />
          <figcaption className="text-center text-gray-500 italic text-xs mt-5">
            Fig. 2 - Autobuz Skoda 1950
          </figcaption>
        </figure>
        <p className="tracking-wide text-justify py-2">
          <span className="text-accent text-left font-semibold text-left w-[200px] mr-5">
            1959
          </span>
          Întreprinderea număra 85 autobuze cu 17 trasee, în lungime totală de
          112 km şi tot în anul 1959 s-a dat în funcţiune prima linie de
          troleibuz (Nr.1), care lega cartierul Şchei cu zona Triaj având în
          dotare un număr de 18 troleibuze.
        </p>
        <p className="tracking-wide text-justify py-2">
          <span className="text-accent text-left font-semibold text-left w-[200px] mr-5">
            1961
          </span>
          Se înfiinţează Întreprinderea de Transporturi Braşov prin
          reorganizarea Întreprinderii de Gospodărie Orăşenească Braşov
          (I.G.O.). La această dată se înregistrau: 163 autobuze, din care 83
          pentru trasee interne şi 80 pentru cele externe; 47 troleibuze TV.2.E;
          45 taximetre şi 47 autocamioane.
        </p>

        <p className="tracking-wide text-justify py-2">
          <span className="text-accent text-left font-semibold text-left w-[200px] mr-5">
            1 Decembrie 1979
          </span>
          Se infiinţează Întreprinderea Judeţeană de Transport Local Braşov, în
          baza Decretului Consiliului de Stat nr.337/1 noiembrie 1979, având
          gradul I de organizare. În baza Deciziei nr.924/30 noiembrie 1979 a
          Consiliului Popular Judeţean Braşov a fost preluat întreg activul şi
          pasivul, inclusiv indicatorii de plan de la fosta Întreprindere de
          Transporturi Braşov, precum şi cele aferente transportului de marfă de
          la Trustul de Construcţii Braşov, Direcţia Judeţeană de Drumuri şi
          Poduri Braşov şi de la serviciile bugetare de pe lângă Comitetele
          executive ale consiliilor populare municipale şi orăşeneşti şi avea în
          exploatare 317 autobuze cu 36.584 locuri capacitate, 190 troleibuze cu
          17.189 locuri capacitate şi 20 taximetre.Personalul aflat în evidenţa
          întreprinderii la 1 ianuarie 1980 a fost de 2.575 salariaţi. Fondurile
          fixe totale aflate în evidenţa I.J.T.L. la 1 ianuarie 1980 au fost de
          489 milioane lei.
        </p>
        <figure className="flex flex-col items-center md:float-right my-6 md:ml-12">
          <Image
            src="/images/despre-noi/3.jpg"
            width={400}
            height={250}
            className="shadow-md"
            alt="Troleibuz TV.2.E"
          />
          <figcaption className="text-center text-gray-500 italic text-xs mt-5">
            Fig. 3 - Troleibuz TV.2.E 1969
          </figcaption>
        </figure>
        <p className="tracking-wide text-justify py-2">
          <span className="text-accent text-left font-semibold text-left w-[200px] mr-5">
            2013
          </span>
          Regia Autonomă de Transport Braşov deţine un parc auto compus din 183
          de autobuze solo de 12 m lungime şi articulate de 16 m lungime, 28 de
          autobuze de capacitate mică şi 30 de troleibuze. Operează pe un
          parcurs ce se compune din 46 trasee, însumând un număr total de 671,80
          km, cu lungimea medie a interstaţiei între 533 m şi 644 m.
          <br />
          Datorită unui plan de dezvoltare şi reînoire a parcului auto al Regiei
          Autonome de Transport Braşov, începând cu anul 2005 au fost
          achiziţionate prin licitaţie publică transparentă, în mai multe
          tranşe, din fonduri proprii, subvenţii, leasing financiar şi cu
          fonduri BERD, autobuze noi, moderne, cu un grad de confort sporit,
          satisfăcând şi condiţia de acces neîngrădit al persoanelor cu
          dizabilităţi locomotorii.
        </p>
        <p className="tracking-wide text-justify py-2">
          <span className="text-accent text-left font-semibold text-left w-[200px] mr-5">
            2016
          </span>
          Regia Autonoma de Transport Brașov (R.A.T. Brașov) se transformă în
          RATBV S.A.
        </p>
        <p className="tracking-wide text-justify py-2">
          <span className="text-accent text-left font-semibold text-left w-[200px] mr-5">
            2023
          </span>
          Cu un parc auto modern și diversificat, care include autobuze solo și
          articulate, precum și troleibuze, RATBV S.A. se angajează în
          promovarea transportului verde și sustenabil în Brașov. Prin
          implementarea unor strategii de dezvoltare și modernizare, compania
          își propune să reducă impactul asupra mediului înconjurător și să
          contribuie la diminuarea emisiilor de carbon în oraș. Astfel, în 2023,
          RATBV S.A. se remarcă ca unul dintre cei mai moderni și eficienți
          operatori de transport din România, consolidându-și reputația ca un
          partener de încredere în promovarea mobilității urbane durabile.
        </p>
      </div>
    </section>
  );
}

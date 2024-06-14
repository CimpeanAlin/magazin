import styled, { keyframes } from "styled-components";
import React from "react";
import Navbar from "../components/Navbar";

const indigoDye = "#12497Dff";
const charcoal = "#2B3F4Eff";
const darkSlateGray = "#33515Bff";
const silver = "#C0B2A9ff";
const gunmetal = "#17282Fff";
const lightGray = "#f8f8f8";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
margin: 0;
padding: 0,
  width: 100vw;
  height: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/photo/mainphoto7.png") center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;
const Wrapper = styled.div`
width: 84%;
margin-top: 30px;
align-items: center;
padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 20px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Article = styled.div`
  margin-bottom: 40px;
  margin-left: 26px;
  margin-right: 26px;
  padding: 26px;
  background-color: ${lightGray};
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: ${indigoDye};
  text-align: center;
  margin-bottom: 20px;
`;

const ArticleTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: ${darkSlateGray};
  margin-bottom: 20px;
  margin top:12px;

`;

const ArticleContent = styled.div`
  font-size: 16px;
  color: ${charcoal};
  line-height: 1.5;
  margin-bottom: 20px;

  p {
    margin-bottom: 10px;
  }
`;

const Blog = () => {
  return (
    <Container>
       <Navbar />
      <Wrapper>
        <Title>Blog</Title>
        
        <Article>
          <ArticleTitle>Articolul 1: Tendințele în Lumea Produselor Handmade</ArticleTitle>
          <ArticleContent>
            <p>În ultimii ani, produsele handmade au câștigat o popularitate uriașă, transformându-se într-o adevărată mișcare globală. Oamenii din întreaga lume caută articole unice, autentice și create cu grijă, în locul produselor de masă fabricate în serie. În acest articol, vom explora câteva dintre tendințele majore care modelează piața produselor handmade.</p>

            <p><strong>1. Sustenabilitatea și Materialele Eco-Friendly</strong></p>
            <p>Una dintre cele mai puternice tendințe în lumea produselor handmade este orientarea către sustenabilitate. Consumatorii sunt din ce în ce mai conștienți de impactul lor asupra mediului și preferă produsele realizate din materiale reciclate sau eco-friendly. Aceste materiale nu doar că reduc amprenta de carbon, dar oferă și un sentiment de responsabilitate și contribuție la protejarea planetei.</p>
            <p>Artizanii folosesc materiale precum bambusul, bumbacul organic, fibrele naturale și lemnul reciclat pentru a crea produse durabile și prietenoase cu mediul. Aceasta nu este doar o tendință, ci o schimbare profundă în modul în care oamenii percep consumul și producția.</p>

            <p><strong>2. Personalizarea Produselor</strong></p>
            <p>Personalizarea este la mare căutare. Consumatorii doresc produse care să reflecte personalitatea lor unică și stilul propriu. Fie că este vorba de bijuterii gravate cu inițiale, obiecte de decor personalizate sau haine făcute la comandă, produsele personalizate adaugă o notă personală și specială care nu poate fi găsită în produsele standard.</p>
            <p>Această tendință a dus la creșterea cererii pentru artizanii care oferă servicii de personalizare, transformând fiecare produs într-o operă de artă unică.</p>

            <p><strong>3. Întoarcerea la Tradiții</strong></p>
            <p>Mulți artizani se inspiră din tehnicile tradiționale și meșteșugurile vechi, readucând la viață metode de producție uitate. Aceasta include tehnici precum țesutul manual, broderia tradițională, prelucrarea pielii și ceramica făcută manual. Produsele create astfel nu doar că au o calitate excepțională, dar spun și o poveste, conectând consumatorii la culturile și tradițiile din care provin.</p>
            <p>Întoarcerea la tradiții oferă produse cu un caracter aparte și o autenticitate care este greu de găsit în produsele fabricate industrial.</p>

            <p><strong>4. Minimalismul și Designul Simplu</strong></p>
            <p>Minimalismul continuă să fie o tendință majoră în designul produselor handmade. Oamenii preferă adesea obiectele simple, funcționale și estetice, care adaugă valoare spațiului fără a-l supraîncărca. Designul minimalist pune accent pe calitatea materialelor și a meșteșugului, în detrimentul decorațiunilor elaborate.</p>
            <p>Această tendință se regăsește în diverse produse, de la mobilier și accesorii pentru casă, până la bijuterii și haine.</p>

            <p><strong>5. Comunitatea și Comerțul Local</strong></p>
            <p>O altă tendință importantă este sprijinirea artizanilor locali și a micilor afaceri. Consumatorii sunt tot mai dornici să își cheltuiască banii în comunitățile lor, încurajând astfel dezvoltarea economică locală. Aceasta a dus la o creștere a piețelor și târgurilor de produse handmade, unde oamenii pot întâlni artizanii și pot afla mai multe despre procesul de creație al produselor.</p>
            <p>Comerțul local oferă o conexiune directă între producător și consumator, promovând transparența și încrederea.</p>

            <p><strong>Concluzie</strong></p>
            <p>Lumea produselor handmade este în continuă evoluție, influențată de schimbările în preferințele consumatorilor și de tendințele globale. De la sustenabilitate și personalizare, la reînvierea tradițiilor și minimalism, aceste tendințe reflectă o dorință profundă pentru autenticitate, calitate și conexiune. Pe măsură ce tot mai mulți oameni îmbrățișează aceste valori, produsele handmade vor continua să crească în popularitate, redefinind modul în care percepem și consumăm bunurile.</p>
          </ArticleContent>
        </Article>

        <Article>
          <ArticleTitle>Articolul 2: Inspiratia Artiștilor Hand-Made</ArticleTitle>
          <ArticleContent>
          
<p>Artiștii handmade sunt cunoscuți pentru creativitatea și originalitatea lor. Fiecare piesă pe care o creează este unică și poartă amprenta personalității și viziunii lor artistice. Dar de unde își găsesc acești artiști inspirația? În acest articol, vom explora diverse surse de inspirație care alimentează creativitatea artiștilor handmade și îi ajută să creeze opere de artă remarcabile.</p>

<p><strong>1. Natura și Mediul înconjurător</strong></p>
<p>Natura este o sursă inepuizabilă de inspirație pentru mulți artiști handmade. Frumusețea naturală a peisajelor, culorile vibrante ale florilor, texturile diferite ale frunzelor și scoarței de copac, și formele unice ale stâncilor și valurilor mării oferă idei nesfârșite pentru creații artistice. Mulți artizani își petrec timpul în aer liber, observând și capturând esența naturii în lucrările lor.</p>

<p><strong>2. Tradiții și Culturi Locale</strong></p>
<p>Tradițiile și culturile locale sunt adesea o sursă majoră de inspirație. Artiștii explorează meșteșugurile vechi, motivele tradiționale și tehnicile ancestrale pentru a-și îmbogăți propriile creații. De exemplu, broderiile tradiționale, tehnicile de țesut, ceramica folclorică și sculpturile din lemn sunt integrate și reinterpretate în moduri contemporane, păstrând în același timp spiritul și autenticitatea culturii originale.</p>

<p><strong>3. Arta și Designul</strong></p>
<p>Artiștii handmade se inspiră și din alte forme de artă și design. Vizitarea muzeelor, galeriilor de artă, expozițiilor de design și evenimentelor de artă contemporană le oferă noi perspective și idei inovatoare. Stilurile artistice precum arta abstractă, arta modernă, impresionismul și arta pop influențează adesea abordările lor creative și le permit să experimenteze cu culori, forme și texturi noi.</p>

<p><strong>4. Oameni și Emoții</strong></p>
<p>Interacțiunile umane și emoțiile sunt surse puternice de inspirație pentru artiști. Experiențele personale, relațiile, bucuriile, tristețile și reflecțiile interioare sunt adesea transformate în opere de artă care vorbesc despre universalitatea sentimentelor umane. Portretele, scenele de viață cotidiană și momentele speciale sunt capturate în mod artistic pentru a rezona cu privitorii la un nivel profund.</p>

<p><strong>5. Literatură și Muzică</strong></p>
<p>Literatura și muzica sunt alte două surse de inspirație foarte importante. Poeziile, romanele, piesele de teatru și cântecele evocă imagini și emoții puternice care pot fi transformate în creații vizuale. Artiștii handmade pot crea bijuterii, picturi, sculpturi sau alte obiecte inspirate de poveștile și melodiile care îi mișcă.</p>

<p><strong>6. Materialele și Tehnicile Noi</strong></p>
<p>Descoperirea de noi materiale și tehnici poate declanșa valuri de inspirație. Un nou tip de argilă, o tehnică de vopsire neconvențională sau un instrument de prelucrare inovator poate deschide uși către posibilități creative neexplorate. Artiștii handmade sunt adesea experimentatori pasionați, mereu în căutarea a ceva nou care să le extindă orizonturile artistice.</p>

<p><strong>7. Călătoriile</strong></p>
<p>Călătoriile oferă artiștilor handmade oportunitatea de a explora noi locuri, culturi și tradiții. Vizitarea altor țări și regiuni poate oferi perspective noi și poate introduce artiștii în materiale și tehnici locale pe care nu le-au mai întâlnit înainte. Fiecare destinație are propria sa estetică și propriile sale povești, care pot fi integrate în operele de artă.</p>

<p><strong>Concluzie</strong></p>
<p>Inspirația pentru artiștii handmade vine dintr-o multitudine de surse, de la natură și tradiții culturale, până la emoții personale și experiențe de viață. Fiecare artist are propriul său proces unic de a găsi inspirație și de a transforma acea inspirație în creații artistice. Aceste surse diverse nu doar că îmbogățesc arta handmade, dar și conectează artiștii cu lumea din jurul lor într-un mod profund și semnificativ.</p>
          </ArticleContent>
        </Article>

        <Article>
          <ArticleTitle>Articolul 3: Evenimente și Târguri Viitoare pentru Artiști Handmade</ArticleTitle>
          <ArticleContent>
<p>Lumea artizanatului este plină de evenimente și târguri unde artiștii handmade își pot prezenta creațiile, se pot conecta cu alți creatori și își pot întâlni clienții față în față. Aceste evenimente sunt esențiale pentru comunitatea handmade, oferind o platformă pentru a celebra creativitatea și a încuraja economia locală. În acest articol, vom explora câteva dintre evenimentele și târgurile viitoare unde artiștii handmade vor fi prezenți.</p>

<p><strong>1. Târgul de Artizanat „Handmade Heaven”</strong></p>
<p>Data: 15-17 iunie 2024</p>
<p>Locație: Piața Mare, Sibiu</p>

<p>Târgul „Handmade Heaven” este un eveniment anual care atrage artiști și artizani din toată țara. Aflat în inima orașului Sibiu, acest târg este cunoscut pentru diversitatea și calitatea produselor prezentate. Vizitatorii vor găsi o gamă largă de articole handmade, de la bijuterii și haine, la obiecte de decor și jucării. Târgul oferă, de asemenea, ateliere interactive unde participanții pot învăța diverse tehnici de artizanat.</p>

<p><strong>2. Festivalul de Artă și Meșteșuguri „CraftFest”</strong></p>
<p>Data: 20-22 iulie 2024</p>
<p>Data: 20-22 iulie 2024</p>

<p>„CraftFest” este un festival de artă și meșteșuguri care aduce laolaltă creatori din diferite domenii artistice. Evenimentul va avea loc în frumosul parc Herăstrău din București, oferind o atmosferă plăcută și relaxantă pentru vizitatori. Pe lângă standurile de vânzare, festivalul va include demonstrații live, spectacole de muzică și zone de food truck-uri, transformându-l într-o experiență completă pentru toate vârstele.</p>

<p><strong>3. Expoziția „Made in Cluj”</strong></p>
<p>Data: 20-22 iulie 2024</p>
<p>Locație: Cluj Arena, Cluj-Napoca</p>

<p>„Made in Cluj” este o expoziție dedicată produselor realizate de artizani locali din Cluj-Napoca și împrejurimi. Expoziția se desfășoară la Cluj Arena, un loc spațios și accesibil. Vizitatorii vor putea admira și achiziționa produse de înaltă calitate, inclusiv accesorii, obiecte decorative și produse de îngrijire personală. De asemenea, evenimentul va include sesiuni de networking pentru artiști, prezentări și discuții pe teme relevante pentru comunitatea handmade.</p>

<p><strong>4. Târgul de Crăciun „Winter Wonderland”</strong></p>
<p>Data: 1-24 decembrie 2024</p>
<p>Locație: Piața Unirii, Timișoara</p>

<p>„Winter Wonderland” este unul dintre cele mai așteptate târguri de Crăciun, oferind o experiență magică atât pentru artiști, cât și pentru vizitatori. Pe lângă standurile cu produse handmade, târgul include activități festive, concerte și spectacole de lumini. Este ocazia perfectă pentru a găsi cadouri unice și a sărbători sezonul festiv într-un cadru de poveste.</p>

<p><strong>5. Festivalul „Handmade & Co”</strong></p>
<p>Data: 5-7 septembrie 2024</p>
<p>Locație: Piața Libertății, Iași</p>

<p>Festivalul „Handmade & Co” este un eveniment dedicat exclusiv produselor handmade, oferind o platformă de lansare pentru artiști noi și consacrați. Desfășurat în centrul istoric al orașului Iași, festivalul atrage mii de vizitatori dornici să descopere creații originale. Pe lângă standurile expozanților, evenimentul include ateliere pentru copii și adulți, concursuri și sesiuni de discuții cu artizanii.</p>

<p><strong>6. Târgul de Vară „Summer Artisan Market”</strong></p>
<p>Data: 12-14 iulie 2024</p>
<p>Locație: Promenada Mall, Constanța</p>

<p>„Summer Artisan Market” este un târg de vară desfășurat la Promenada Mall din Constanța, unde artiștii handmade își expun cele mai noi creații. Vizitatorii pot găsi articole de modă, bijuterii, produse cosmetice naturale și multe altele. Atmosfera relaxată de la malul mării, combinată cu muzică live și demonstrații artistice, face din acest târg o destinație ideală pentru o zi de vară.</p>

<p><strong>Concluzie</strong></p>
<p>Participarea la târguri și evenimente este esențială pentru artiștii handmade, oferindu-le oportunitatea de a-și promova creațiile și de a-și extinde rețeaua profesională. Aceste evenimente nu sunt doar locuri de vânzare, ci și spații de inspirație, învățare și conectare cu comunitatea. Dacă sunteți pasionați de arta handmade, nu ratați ocazia de a vizita aceste târguri și de a descoperi talentul și creativitatea artizanilor locali.</p>
          </ArticleContent>
        </Article>
      </Wrapper>
    </Container>
  );
};

export default Blog;

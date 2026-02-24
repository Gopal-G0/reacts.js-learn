import CardComponent from "./components/CardComponent";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import Greeting from "./components/Greetings";

function App() {
  return (
    <div>
      <h2>Hello, This Is Gopal</h2>
      {/* <ClassComponent />
      <FunctionalComponent/>*/}
      <Greeting name="Gopal" />
      <CardComponent
        image="https://imgs.search.brave.com/gfbbDXPeGfJC2ZiRf2-4GxV6NCnu9zNdTVDyJk9PcSU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmFuZGFuZ28u/Y29tL0ltYWdlUmVu/ZGVyZXIvODIwLzAv/cmVkZXNpZ24vc3Rh/dGljL2ltZy9kZWZh/dWx0X3Bvc3Rlci5w/bmcvMC9pbWFnZXMv/bWFzdGVycmVwb3Np/dG9yeS9wZXJmb3Jt/ZXIlMjBpbWFnZXMv/Mzg0NzkzL2xlZWJ5/dW5naHVuLXB1c2Fu/ZmlsbWZlc3RpdmFs/LTMuanBn"
        name="Lee Byung Hun"
        jobTitle="South Korean Actor"
        email="leebyung@korea.kr"
      />
      
      <CardComponent
        image="https://imgs.search.brave.com/zJieDBfqCXvD8dxz_q0PA9BJcWrCkoLuelbAB814WOo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kYW5p/ZWwtZGF5LWxld2lz/LTIwMTU2MzE3Lmpw/Zw"
        name="Daniel Day Lewis"
        jobTitle="Hollywood Actor"
        email="danielday.aga@america.in"
      />
      
      <CardComponent
        image="https://imgs.search.brave.com/F9yHu_xXZmxeY_MLSw2JkRu16P_fLX5C-ujOmPVZ4dw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIz/NTQ1MjE5OC9waG90/by9sb3MtYW5nZWxl/cy1jYWxpZm9ybmlh/LWpha2UtZ3lsbGVu/aGFhbC1hdHRlbmRz/LXRoZS03N3RoLXBy/aW1ldGltZS1lbW15/LWF3YXJkcy1hdC1w/ZWFjb2NrLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz13bEhh/Vk40Z0NFUV95SVFW/Z3ZLLUt5VmZMN2pX/LWtUUDRUVEcxN21T/V1cwPQ"
        name="Jake Gyllenhaal"
        jobTitle="Actor"
        email="Gyllenhaal.jake@legend.in"
      />
      
      <CardComponent
        image="https://imgs.search.brave.com/CzG8x70mwYfeKb-iL5Sra3Rg1Dw8rgwoKW-_bIEZC_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI0Lzg0/LzcwLzI0ODQ3MDE5/OWQ3OTAxZGQ5ZjVh/ZGJlZDdhNmEzOTMy/LmpwZw"
        name="Tony Stark"
        jobTitle="Avenger: Iron Man"
        email="tonystark@avengers.shield"
      />
      
      <CardComponent
        image="https://imgs.search.brave.com/QrQdL6haqpL8SZlCHRAWjQZdHMs-bc6LnWm7pkQfgwk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudGVlbnZvZ3Vl/LmNvbS9waG90b3Mv/NTU4MjhkNmM5NDFh/OTU1MzBkMDQyYjVh/L21hc3Rlci93XzEw/MjQsY19saW1pdC9i/ZWF1dHktY2VsZWJy/aXR5LWJlYXV0eS0y/MDE1LTA2LWJlYXV0/eS1ldm9sdXRpb24t/ZW1tYS1zdG9uZS0x/MC5qcGc"
        name="Emma Stone"
        jobTitle="Hollywood Actor"
        email="stoneemma@bugonia.com"
      />
    </div>
  );
}

export default App

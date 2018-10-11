export class HomeView {

  constructor(element){
    this.element = element;
  }

  updateModel(pathName){

    return pathName === "/" || !pathName ? 
      // HOME INDEX
      `      
      <article class="card">
        <h2>Modular Arithmetic</h2>
        <h3>An Introduction To Modular Math</h3>
        <p>When we divide two integers we get <i>Equation</i> :</p>
        <br />
        <div class="middle-content">
          <p style="align-self: center;"><b>A</b><br>
            -- = <b>Q</b><span><i> remainder</i></span> <b>R</b><br>
            <b>B</b></p><br>
        </div>
        <div>
          <p>Where :</p>
          <p>A is <i>Divident</i><br>
            B is <i>Divisor</i><br>
            Q is <i>Quotient</i><br>
            R is <i>Remainder</i><br></p><br>
        </div>
        <p> Sometimes, we are only interested in finding the <b><i>Remainder</i></b>.<br>
          for these cases we use <b><i>modulo</i></b> operator (mod).<br>
          using abouve <i>equation</i> we have :</p><br>
        <p class="middle-content"><span style="border-style: ridge; align-self: center"> A <b><i>mod</i></b> B = R </span></p><br>
        <h2>Examples With Visualisation</h2>
        <p>8 <b><i>mod</i></b> 4 = ?</p><br>

        <p>With a modulus of 4 we make a clock with numbers 0,1,2,3.<br></p>
        <p>We start at 0 and go through 8 numbers in a clockwise sequence 1 -> 2 -> 3 -> 0 -> 1 -> 2 -> 3 -> 0. <br></p>
        <div class="middle-content"><img src="css//img//6985b5aad53b5290f3f0eb64bf9529428a0362cc.jpg" alt="Mod Clock"></div>
        <p>So, the Modulus will be 0.</p>
        <p style="font-family: Raleway ; font-size: 20px">7 <b><i>mod</i></b> 2 = ?</p><br>
        <p>With a modulus of 2 we make a clock with numbers 0 and 1.<br></p>
        <p> We start at 0 and go through 7 numbers in clockwise sequence 1 -> 0 -> 1 -> 0 -> 1 -> 0 -> 1.</p>
        <div class="middle-content"><img src="css//img//cc504f5d837e4bf480bf2f0acc5496ca1cfebdcc.jpg" alt="ModClk"></div><br>
        <p>So the Modulus will be 1.</p><br>
        <p style="font-family: Raleway ; font-size: 20px">-5 <b><i>mod</i></b> 3 = ?</p><br>

        <p>With a modulus of 3 we make a clock with numbers 0 , 1 and 2.<br></p>
        <p> We start at 0 and go through 5 numbers in <b><i>counter</i></b>-clockwise sequence 2 -> 1 -> 0 -> 2 -> 1.</p>
        <div class="middle-content"><img src="css//img//7182f3b5a4573a4846e1297388c97516550c3fba.jpg" alt="ModClk1"></div><br>
        <p>So the Modulus will be 1.</p><br>
        <p style="font-size: 10px"><i>Source : KhanAcademy.com</i></p>
      </article>
      `
      : pathName === "/primality" ? 
      `
      <div class="card">
        <h2>Primes</h2>
        <h3>Introduction To Primes</h3>
        <p>In Number theory Primes play a very important role.They are the <b><i>keys</i></b> of Code and Cryptography.<br>
          Fist time we used Primes was in the Problem of <a href="PrimeFact.html"><b><i>factorisation</i></b></a>.</p>
        <p style="font-size: 18px">They can only be divided by 1 or Themselves ;<br>
          That's why we call them <b><i>Primes</i></b></p><br><br>
            <h2 style="font-family: Merriweather">Examples With Visualisation</h2>
            <p style="font-size: 25px">Primes as Locks :</p>
      <div class="middle-content"><img src="css//img//05f1d72b048ebba84dc96e1e6f02ba29ccd88457.png"></div>
      <br>
      <p style="font-size: 18px">As you can see in above explanation Primes are the builing blocks of any natural number.</p>
      <p style="font-size: 18px">For example if we take an two large Prime numbers say <b>P1</b> = 709 and <b>P2 = 733</b><br>
          the Multiplication of the i.e. <b>P1</b>*<b>P2</b> = <b>519697</b>....<br>
          that was easy we can just use a calculator for that <b>But</b> ;<br>
          if I ask you to find <br>
          <b>519697</b> = ? * ?<br>
          then its difficult don't you say !!!<br></p>
      <p>Well its not your fault ,there are limits to our calculations and we accept it . because in case of Large Primes BruteForce gets difficult and difficult.  Here is a proof for that :: </p>
      <div class="middle-content"><img src="css//img//9df89f48e72c47c84170f183477b5c1628307785.png"></div>
      <p> As you can see Time increases exponentially wrt. the size of input.</p>
      <p> But how can we check if a number is Prime or not .....<br>
          Well we have a tooll for that ; Check the below section</p>
      <p style="padding-left: 800px;font-size: 10px"><i>Source : KhanAcademy.com</i></p>
  </div>
      `
 : null
  }


  updateDom(pathName){
    this.element.innerHTML = this.updateModel(pathName);
  }

}
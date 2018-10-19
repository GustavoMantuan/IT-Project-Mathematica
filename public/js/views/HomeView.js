export class HomeView {

  constructor(element){
    this.element = element;
  }

  updateModel(pathName){

    return pathName === "/" || !pathName ? 
      // HOME INDEX
      `      
      <article class="card">
        <h2><b>Modular Arithmetic</b></h2>
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
        <h2><b>Primes</b></h2>
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
      <p style="text-align: right; font-size: 10px"><i>Source : KhanAcademy.com</i></p>
  </div>
      `
 : pathName === '/primeFact' ?
    `
    <div class="card">
      <h2><b>Prime Factorisation</b></h2>
      <h3>Introduction To Factorisation</h3>
      <p style="font-size: 18px">In Number theory Primes play a very important role.They are the <b><i>keys</i></b> 
      of Code and Cryptography.<br>
        Fist time we used Primes was in the Problem of <b><i>factorisation</i></b>.</p>
      <p style="font-size: 18px">They can only be divided by 1 or Themselves ;<br>
        That's why we call them <b><i>Primes</i></b></p><br><br>
      <h2>Examples With Visualisation</h2>
      <p style="font-size: 25px">Primes as Locks :</p>
      <div class="middle-content">
        <img src="css//img//05f1d72b048ebba84dc96e1e6f02ba29ccd88457.png">
      </div>
      <br>
      <p style="font-size: 18px">As you can see in above explanation Primes are the builing blocks of any natural number.</p>
      <p>Wanna see how Check Below</p>
      <p style="font-size: 10px"><i>Source : KhanAcademy.com</i></p>
    </div>`
 : pathName === '/rsa' ?
    `
  <div class="card">
    <h2><b>RSA Encryption</b></h2>
    <h3><b>Prequisites</b></h3>
    <h2 style="font-family: Raleway">Modulo P</h2>
    <b><p style="font-size: 18px">The Set:<br><spanfont-size:23px;font-family: Raleway">
      <b><i>Z(p) = { 0 , 1 , 2 , 3 , 4 , . . . , p-1 }</i></b></span><br>
      </p>
      <p> Is called the set of integers modulo p (or mod p for short). It is a set that contains Integers from 0 up until p−1.
        <br><b>Example: Z10={0,1,2,3,4,5,6,7,8,9}</b></p>
        <h2 >Multiplicative Inverse And The Greatest Common Divisor</h2>
      <br>
      <br>
    <p style="font-size: 18px">
    A multiplicative inverse for x is a number that when multiplied by x, will equal 1. The multiplicative inverse of x is written as x<sup>-1</sup> and is defined as so:</p>
    <p><b>x . x<sup>-1</sup> = 1</b></p>
    <p><b>The greatest common divisor (gcd)</b> between two numbers is the largest integer that will divide both numbers. For example, gcd(4,10)=2.</p>
    <p style="font-size: 20px"> The interesting thing is that if two numbers have a gcd of 1, then the smaller of the two numbers has a multiplicative inverse in the modulo of the larger number. <br>
    </p><br>
    <p><b>Example</b>: Lets work in the set Z9, then 4 <b>∈</b> Z9 and <b>gcd(4 , 9) = 1</b>. Therefore 4 has a multiplicative inverse (written 4<sup>-1</sup>) in 
    <b>mod </b>9, which is 7. And indeed, 4 . 7 = 28 = 1 <b>mod</b> 9. But not all numbers have inverses. For instance, 3 <b>∈</b>
     Z9 but 3<sup>-1</sup> does not exist! This is because <b>gcd(3 , 9)=3 ≠ 1.</b></p>
      <h2 style="font-family: Raleway">Euler's Totient</h2>
        <p style="font-size: 20px">Euler's Totient is the number of elements that have a multiplicative inverse in a set of modulo integers. 
        The totient is denoted using the Greek symbol phi <b>ϕ</b>.the totient is just the count of the number of elements that have their gcd with the modulus equal to 1. 
        This brings us to an important equation regarding the totient and prime numbers:</p><br>
          <p style="margin-left: 350px"><b> p <b>∈</b> P  , <b>ϕ(p) = (p-1)</p><br>
            <p><b>EXAMPLE :</b>  ϕ(7) = |{0 , 1 , . . . , 6 }| = 6</p><br>
            <br>
              <h2 style="font-family: Raleway ; font-size:38px"><b>R S A</b></h2>
                <p style="font-size: 20px">With the above background, we have enough tools to describe RSA and show how it works. RSA is actually a set of two algorithms:<br>
                <ol  style="font-size: 20px;font-family: Raleway">
                <li> <b>Key Generation</b>: A key generation algorithm.</li>
                <li><b>RSA Function Evaluation</b>A function F : : that takes as input a point x and a key k and produces either an encrypted result or plaintext, depending on the input and the key.</li>
              </ol>
            </p></b></b></b>
            <h2 style="font-family: Raleway ; font-size:38px">Key Generation</h2>
            <p style="font-size: 20px">The key generation algorithm is the most complex part of RSA.
              The aim of the key generation algorithm is to generate both the public and the private RSA keys. Sounds simple enough!
              Unfortunately, weak key generation makes RSA very vulnerable to attack. So it has to be done correctly.
              Here is what has to happen in order to generate secure RSA keys</p>
            <ol style="font-size: 20px;font-family: Raleway">
            <li><b>Large Prime Number Generation:</b> Two large prime numbers <b>p</b> and <b>q</b> need to be generated. 
            These numbers are very large: At least 512 digits, but 1024 digits is considered safe.</li>
            <li><b>Modulus : </b> From the two large numbers, a modulus n is generated by multiplying <b>p</b> and <b>q</b>.</li>
            <li><b>Totient : </b> The totient of n,<b>ϕ(n)</b> is calculated. <b> n = p * q</b></li>
            <li><b> Public Key (e) : </b> A prime number is calculated from the range <b>[ 3, ϕ(n) )</b> that has a greatest common divisor of 1 with ϕ(n).</li>
            <li><b>Private Key (d): </b> Because the prime in step 4 has a gcd of 1 with ϕ(n), we are able to determine it's inverse with respect to <b>modϕ(n)</b>.</li></ol>
            <br><br>
            <h2 style="font-family: Raleway ; font-size:38px">R S A Function Evaluation</h2>
            <p style="font-size: 20px">This is the process of transforming a plaintext message into ciphertext, or vice-versa. 
            The RSA function, for message m and key k is evaluated as follows:<br>
            <span ;font-size:20px"><b><i>F(m,k) = m<sup>k</sup> mod (n)</i></b></span></p>
            <p style="font-size: 20px"><b>Encryption : </b> F(m,e) = m<sup>e</sup> mod n = <b>c</b> <b><i>(cipher)</i></b> 
            where m is the <b>message</b> , e is the <b>public key</b> and n is <b>modulus</b></p>
            <p style="font-size: 20px"><b>Decryption :</b> F(c,d) = c<sup>d</sup> mod n = m the <b><i>message</i></b></p>
    </div>
    `
  : pathName === '/modularAddMulSub' ?
  `
  <div class="card">
    <h2><b>Modular Addition , Subtraction and Multiplication</b></h2>
    <h3 style="font-family: Raleway"><b><i>Adding Modular Expressions</i></b></h3>
    <h4 style="font-family: Merriweather">(A + B) mod C = (A mod C + B mod C) mod C</h4>
    <p>Example:<br>
      Let A=14, B=17, C=5<br>
      Let's verify: (A + B) mod C = (A mod C + B mod C) mod C<br>
      LHS = Left Hand Side of the Equation<br>
      RHS = Right Hand Side of the Equation<br>
      LHS = (A + B) mod C<br>
      LHS = (14 + 17) mod 5<br>
      LHS = 31 mod 5<br>
      LHS = 1<br>
      RHS = (A mod C + B mod C) mod C<br>
      RHS = (14 mod 5 + 17 mod 5) mod 5<br>
      RHS = (4 + 2) mod 5<br>
      RHS = 1<br>
      LHS = RHS = 1<br>
    </p>
    <p>Visualisation of Modular addition:<br></p>
    <div class="middle-content"><img src="css//img//3a2cb32acda2b6b63f88c61b8def97c0c1185767.jpg" alt="Mod Clock"></div>
    <h3 style="font-family: Raleway"><b><i>Subtacting Modular Expressions</i></b></h3>
    <p>The same concept is used while subtracting the modular expressions.<br></p>
    <h4 style="font-family: Merriweather">(A - B) mod C = (A mod C - B mod C) mod C</h4>
    <h3 style="font-family: Raleway"><b><i>Multiplying Modular Expressions</i></b></h3>
    <p>The same concept is used while multiplying the modular expressions.<br></p>
    <h4 style="font-family: Merriweather">(A * B) mod C = (A mod C * B mod C) mod C</h4>
    <p style="font-size: 10px; text-align: right"><i>Source : KhanAcademy.com</i></p>
    </div>
  `
  : pathName === '/congo' ?
    `
    <div class="card">
      <h2><b>Congruence Modulo</b></h2>
      <h3 style="font-family: Raleway">Introduction To Congruence Modulo</h3>
      <p style="font-size: 18px">You may see an expression like:<br>
        <span style="text-align: right"><b><i>A≡B(mod C)</i></b></span>
        <br>This says that A is congruent to B <b><i>mod</i></b> C.<br></p>
        <p> We will discuss the meaning of congruence modulo by performing a thought
        <br>experiment with the regular modulo operator.</p><p>Let's imagine we were calculating mod 5 for all of the integers:</p>
        <h2 style="font-family: Merriweather">Examples With Visualisation</h2>
        <br>
        <div class="middle-content">
          <img src='css//img///congo.png'>
        </div>
        <br>
        <p style="font-size: 18px">Suppose we labelled 5 slices 0, 1, 2, 3, 4.</p>
        <p>Then, for each of the integers, we put it into a slice that matched the value of the integer mod 5.
            Think of these slices as buckets, which hold a set of numbers. For example, 26 would go in the slice labelled 1,</p>
        <p>because <b><i>26</i> mod <i>5</i></b> = <b><i>1</i></b>
        Above is a figure that shows some integers that we would find in each of the slices. </p>
        <p style="font-size: 18px"> 
        It would be useful to have a way of expressing that numbers belonged in the <b>same slice.</b>
        <br>(Notice 26 is in the same slice as 1, 6, 11, 16, 21 in above example)
        <p>A common way of expressing that two values are in the same slice,
        is to say they are in the same equivalence class.<br>
        The way we express this mathematically for mod C is:<b> A≡B (mod C)</b></p>
        <p>The above expression is pronounced A is congruent to B modulo C.</p>
        <p>Examining the expression closer:</p>
        <p><b>1.</b> ≡ is the symbol for congruence, which means the values A and B are in the same equivalence class.</p>
        <p><b>2.</b> (mod C) right parenthesis tells us what operation we applied to A and B.</p>
        <p><b>3.</b>when we have both of these, we call "≡" congruence modulo C.</p>
        <p style="text-align: right;font-size: 10px"><i>Source : KhanAcademy.com</i></p>
    </div>
    `              
  : null
  }


  updateDom(pathName){
    this.element.innerHTML = this.updateModel(pathName);
  }

}
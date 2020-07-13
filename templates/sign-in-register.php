<div class="b-mainPicture">
    <!-- <div class="b-theBrandMainPicture__AVE">A V E</div> -->
    <h1 class="b-mainPicture__head b-mainPicture__head_bottom">
        <span class="b-mainPicture__head b-mainPicture__head_bold">welcome</span> to ave</h1>
    <h3 class="b-mainPicture__slogan">sign in or register</h3>
</div>

<main class="mainSignInRegisterPage">
    <div class="b-signInBlock">
        <h4 class="b-signInBlock__head">sign in</h4>
        <form action="#" method="POST" class="b-signInBlock__form b-signInBlock__form_top">
            <div class="b-signInBlock__inputBlock">
                <input type="email" class="b-signInBlock__input" placeholder="Your Email.." required>
            </div>
            <div class="b-signInBlock__inputBlock">
                <input type="password" name="password" class="b-signInBlock__input" placeholder="Your password.." required> 
            </div>
            <button class="b-signInBlock__submit">Sign in</button>
            <a href="#" class="b-signInBlock__forgot b-signInBlock__forgot_left">Forgot your Password <i class="fas fa-long-arrow-alt-right"></i></a>
        </form>
    </div>

    <div class="b-registerBlock">
        <h4 class="b-registerBlock__head">Register</h4>
        <form action="#" method="POST" class="b-registerBlock__form b-registerBlock__form_top">
            <div class="b-registerBlock__inputBlock">
                <input type="email" name="email" class="b-registerBlock__input" placeholder="Your Email.." required>
            </div>
            <div class="b-registerBlock__inputBlock">
                <input type="password" name="password" class="b-registerBlock__input" placeholder="Your password.." required>
            </div>
            <div class="b-registerBlock__inputBlock">
                <input type="password" name="confirmPassword" class="b-registerBlock__input" placeholder="Confirm password.." required>
            </div>
            <div class="b-registerBlock__checkbox">
                <input type="checkbox" name="signIn" required>
                <label for="signIn">Sign up for exclusive updates, discounts, new arrivals, contests, and more!</label>
            </div>
            <button class="b-registerBlock__submit">Create Account</button>
            <p class="b-registerBlock__privacyPolicy b-registerBlock__privacyPolicy_left">
                By clicking ‘Create Account’, you agree to our 
                <a href="#" class="b-registerBlock__link">Privacy Policy <i class="fas fa-long-arrow-alt-right"></i></a>
            </p>
        </form>
    </div>
</main>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="packages/fontawesome-free-5.13.0-web(1)/fontawesome-free-5.13.0-web/css/all.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/style.css">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <div class="content">
            <div class="currencyRegisterSignInAndBasket clearfix">
                <div class="currency">Currency : <span>GBP</span> <i class="fas fa-angle-down"></i></div>
                <div class="register"><a href="index.php?page=sign-in-and-register">Register</a></div>
                <div class="signIn"><a href="index.php?page=sign-in-and-register">Sign In</a></div>
                <div class="basketIcon"><i class="fas fa-shopping-cart"></i> <span class="word"></span> <i class="fas fa-angle-down"></i></div>
                <div class="basketBlock"></div>
                <div class="lookbookIcon"><i class="fas fa-heart"></i> <span class="word"></span> <i class="fas fa-angle-down"></i></div>
                <div class="lookbookBasket"></div>
            </div>
    
            <header class="headerHomePage">
                <div class="headerLogoNavAndSearch">
                    <div class="b-logo"><a class="b-logo__link" href="/"><span class="b-logo__link b-logo__link_bold">avenue</span>fashion</a></div>
                    <nav class="b-mainNav b-mainNav_topAndLeft">
                    <input type="checkbox" name="toggle" id="menu" class="b-mainNav__inputToggleMenu">
                    <label for="menu" class="b-mainNav__toggleMenu"><i class="fa fa-bars"></i>Menu</label>
                        <ul class="b-mainNav__items">
                            <li class="b-mainNav__item">
                                <input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m1">
                                <a href="#" class="b-mainNav__link">mens</a>
                                <label for="sub_m1" class="toggleSubmenu"><i class="b-mainNav__arrowDown fas fa-angle-down"></i></label>
                                <ul class="b-navDropDown">
                                    <li class="b-navDropDown__casual">
                                        <input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m1-1">
                                        <a href="#" class="b-navDropDown__casualHead b-navDropDown__casualHead_bottom">casuals</a>
                                        <label for="sub_m1-1" class="toggleSubmenu"><i class="b-navDropDown__arrowDown fas fa-angle-down"></i></label>
                                        <ul class="b-navDropDown__casualItems">
                                            <li class="b-navDropDown__casualItem">
                                                <a href="index.php?page=category&sex=mens&type=casuals&products=jackets" class="b-navDropDown__link">Jackets</a>
                                            </li>
                                            <li class="b-navDropDown__casualItem">
                                                <a href="index.php?page=category&sex=mens&type=casuals&products=hoodiesandsweatshirts" class="b-navDropDown__link">Hoodies & Sweatshirts</a>
                                            </li>                                        
                                            <li class="b-navDropDown__casualItem">
                                                <a href="index.php?page=category&sex=mens&type=casuals&products=poloshirts" class="b-navDropDown__link">Polo Shirts</a>
                                            </li>                                        
                                            <li class="b-navDropDown__casualItem">
                                                <a href="index.php?page=category&sex=mens&type=casuals&products=sportswear" class="b-navDropDown__link">Sportswear</a>
                                            </li>                                        
                                            <li class="b-navDropDown__casualItem">
                                                <a href="index.php?page=category&sex=mens&type=casuals&products=trousersandchinos" class="b-navDropDown__link">Trousers & Chinos</a>
                                            </li>                                        
                                            <li class="b-navDropDown__casualItem">
                                                <a href="index.php?page=category&sex=mens&type=casuals&products=t-shirts" class="b-navDropDown__link">T-Shirts</a> 
                                            </li>                                        
                                        </ul>
                                    </li>
                                    <li class="b-navDropDown__formal">
                                        <input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m1-2">
                                        <a href="#" class="b-navDropDown__formalHead b-navDropDown__formalHead_bottom">Formal</a>
                                        <label for="sub_m1-2" class="toggleSubmenu"><i class="b-navDropDown__arrowDown fas fa-angle-down"></i></label>
                                        <ul class="b-navDropDown__formalItems">
                                            <li class="b-navDropDown__formalItem">
                                                <a href="index.php?page=category&sex=mens&type=formal&products=jackets" class="b-navDropDown__link">Jackets</a>
                                            </li>                                        
                                            <li class="b-navDropDown__formalItem">
                                                <a href="index.php?page=category&sex=mens&type=formal&products=shirts" class="b-navDropDown__link">Shirts</a>
                                            </li>                                        
                                            <li class="b-navDropDown__formalItem">
                                                <a href="index.php?page=category&sex=mens&type=formal&products=suits" class="b-navDropDown__link">Suits</a>
                                            </li>                                        
                                            <li class="b-navDropDown__formalItem">
                                                <a href="index.php?page=category&sex=mens&type=formal&products=trousers" class="b-navDropDown__link">Trousers</a>
                                            </li>                                
                                        </ul>
                                    </li>
                                    <li class="b-navDropDown__specialOffer">
                                        <a href="#" class="b-navDropDown__specialOfferLink">
                                            <p><span class="b-navDropDown__specialOffer_bold">Autumn sale!</span>
                                            up to 50% off</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="b-mainNav__item">
                                <input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m2">
                                <a href="#" class="b-mainNav__link">womens</a>
                                <label for="sub_m2" class="toggleSubmenu"><i class="b-mainNav__arrowDown fas fa-angle-down"></i></label>
                                <ul class="b-navDropDown">
                                    <li class="b-navDropDown__casual">
                                        <input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m2-1">
                                        <a href="#" class="b-navDropDown__casualHead b-navDropDown__casualHead_bottom">casuals</a>
                                        <label for="sub_m2-1" class="toggleSubmenu"><i class="b-navDropDown__arrowDown fas fa-angle-down"></i></label>
                                        <ul class="b-navDropDown__casualItems">
                                            <li class="b-navDropDown__casualItem">
                                                <a href="index.php?page=category&sex=womens&type=casuals&products=jackets" class="b-navDropDown__link">Jackets</a>
                                            </li>
                                            <li class="b-navDropDown__casualItem">
                                                <a href="index.php?page=category&sex=womens&type=casuals&products=hoodiesandsweatshirts" class="b-navDropDown__link">Hoodies & Sweatshirts</a>
                                            </li>                                        
                                            <li class="b-navDropDown__casualItem">
                                                <a href="index.php?page=category&sex=womens&type=casuals&products=blouses" class="b-navDropDown__link">Blouses</a>
                                            </li>                                        
                                            <li class="b-navDropDown__casualItem">
                                                <a href="index.php?page=category&sex=womens&type=casuals&products=dresses" class="b-navDropDown__link">Dresses</a>
                                            </li>                                        
                                            <li class="b-navDropDown__casualItem">
                                                <a href="index.php?page=category&sex=womens&type=casuals&products=skirts" class="b-navDropDown__link">Skirts</a>
                                            </li>                                        
                                            <li class="b-navDropDown__casualItem">
                                                <a href="index.php?page=category&sex=womens&type=casuals&products=t-shirts" class="b-navDropDown__link">T-Shirts</a> 
                                            </li>                                        
                                        </ul>
                                    </li>
                                    <li class="b-navDropDown__formal">
                                        <input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m2-2">
                                        <a href="#" class="b-navDropDown__formalHead b-navDropDown__formalHead_bottom">Formal</a>
                                        <label for="sub_m2-2" class="toggleSubmenu"><i class="b-navDropDown__arrowDown fas fa-angle-down"></i></label>
                                        <ul class="b-navDropDown__formalItems">
                                            <li class="b-navDropDown__formalItem">
                                                <a href="index.php?page=category&sex=womens&type=formal&products=jackets" class="b-navDropDown__link">Jackets</a>
                                            </li>                                        
                                            <li class="b-navDropDown__formalItem">
                                                <a href="index.php?page=category&sex=womens&type=formal&products=blouses" class="b-navDropDown__link">Blouses</a>
                                            </li>                                        
                                            <li class="b-navDropDown__formalItem">
                                                <a href="index.php?page=category&sex=womens&type=formal&products=dresses" class="b-navDropDown__link">Dresses</a>
                                            </li>                                        
                                            <li class="b-navDropDown__formalItem">
                                                <a href="index.php?page=category&sex=womens&type=formal&products=skirts" class="b-navDropDown__link">Skirts</a>
                                            </li>                                
                                        </ul>
                                    </li>
                                    <li class="b-navDropDown__specialOffer">
                                        <a href="#" class="b-navDropDown__specialOfferLink">
                                            <p><span class="b-navDropDown__specialOffer_bold">Autumn sale!</span>
                                            up to 50% off</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="b-mainNav__item">
                                <a href="index.php?page=brand" class="b-mainNav__link">the brand</a> 
                            </li>
                            <li class="b-mainNav__item">
                                <a href="index.php?page=local-stores" class="b-mainNav__link">local stores</a>
                            </li>
                            <li class="b-mainNav__item">
                                <input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m3">
                                <a href="#" class="b-mainNav__link">look book</a>
                                <label for="sub_m3" class="toggleSubmenu"><i class="b-mainNav__arrowDown fas fa-angle-down"></i></label>
                                <ul class="b-navDropDown b-navDropDown_right">
                                    <li class="b-navDropDown__ourLookbook">
                                        <input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m3-1">
                                        <a href="#" class="b-navDropDown__ourLookbookHead b-navDropDown__ourLookbookHead_bottom">Our Lookbooks</a>
                                        <label for="sub_m3-1" class="toggleSubmenu"><i class="b-navDropDown__arrowDown fas fa-angle-down"></i></label>
                                        <ul class="b-navDropDown__ourLookbookItems">
                                            <li class="b-navDropDown__ourLookbookItem">
                                                <a href="index.php?page=lookbook" class="b-navDropDown__link">Latest Posts (mixed)</a>
                                            </li>                                        
                                            <li class="b-navDropDown__ourLookbookItem">
                                               <a href="index.php?page=lookbookposts&sex=mens" class="b-navDropDown__link">Men’s Lookbook</a> 
                                            </li>                                        
                                            <li class="b-navDropDown__ourLookbookItem">
                                               <a href="index.php?page=lookbookposts&sex=womens" class="b-navDropDown__link">Women’s Lookbook</a> 
                                            </li>                                        
                                        </ul>
                                    </li>
                                    <li class="b-navDropDown__yourLookbook">
                                        <input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m3-2">
                                        <a href="#" class="b-navDropDown__yourLookbookHead b-navDropDown__yourLookbookHead_bottom">Your Lookbooks</a>
                                        <label for="sub_m3-2" class="toggleSubmenu"><i class="b-navDropDown__arrowDown fas fa-angle-down"></i></label>
                                        <ul class="b-navDropDown__yourLookbookItems">
                                            <li class="b-navDropDown__yourLookbookItem">
                                                <a href="#" class="b-navDropDown__link">View and Edit</a>
                                            </li>
                                            <li class="b-navDropDown__yourLookbookItem">
                                                <a href="#" class="b-navDropDown__link">Share</a>
                                            </li>
                                            <li class="b-navDropDown__yourLookbookItem">
                                                <a href="#" class="b-navDropDown__link">Delete</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="b-navDropDown__specialOffer">
                                        <a href="#" class="b-navDropDown__specialOfferLink">
                                            <p><span class="b-navDropDown__specialOffer_bold">Autumn sale!</span>
                                            up to 50% off</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <form action="#" class="b-siteSearch b-siteSearch_left">
                        <input type="text" class="b-siteSearch__field" placeholder="Search.."><button class="b-siteSearch__btn"><i class="fas fa-search"></i></button>
                    </form>
                </div>
                <div class="headerHomePage__AVE">
                    <div class="headerLetter">A  V  E </div>
                    <a href="index.php?page=category&sex=mens" class="headerBtn">shop men’s collection</a>
                </div>
            </header>
             
            <div class="mainContent">
                <?php

                    $j = file_get_contents('catalogData.json' );
                    $goods = json_decode($j, true); 

                    $page = $_GET['page'];

                    if (!isset($page)) {
                        require('templates/mainPage.php');
                    } elseif ($page == 'brand') {
                        require('templates/brand.php');
                    } elseif ($page == 'local-stores') {
                        require('templates/local-stores.php');
                    } elseif ($page == 'lookbook') {
                        require('templates/lookbook.php');
                    } elseif ($page == 'sign-in-and-register') {
                        require('templates/sign-in-register.php');
                    } elseif ($page == 'category') {
                        require('templates/category.php');
                    } elseif($page == 'lookbookposts') {
                        require('templates/lookbookposts.php');
                    } elseif ($page == 'product') {
                        $id = $_GET['id'];
                        $good = [];
                        foreach ($goods as $product) {
                            if ($product['id'] == $id) {
                                $good = $product;
                                break;
                            }
                        }
                        require('templates/product-view.php');
                    }
                ?>
            </div>

        </div>

        <footer>
            <div class="b-footerNav">
                <div class="b-footerInfo">
                    <h4 class="b-footerInfo__head b-footerInfo__head_bottom">Information</h4>
                    <div class="b-footerInfo__links">
                        <a href="index.php?page=brand" class="b-footerInfo__link">The brand</a>
                        <a href="index.php?page=local-stores" class="b-footerInfo__link">Local stores</a>
                        <a href="#" class="b-footerInfo__link">Customer service</a>
                        <a href="#" class="b-footerInfo__link">Privacy & cookies</a>
                        <a href="#" class="b-footerInfo__link">Site map</a>
                    </div>
                </div>
                <div class="b-footerWhyBuyFromUs">
                    <h4 class="b-footerWhyBuyFromUs__head b-footerWhyBuyFromUs__head_bottom">Why buy from us</h4>
                    <div class="b-footerWhyBuyFromUs__links">
                        <a href="#" class="b-footerWhyBuyFromUs__link">Shipping & returns</a>
                        <a href="#" class="b-footerWhyBuyFromUs__link">Secure shopping</a>
                        <a href="#" class="b-footerWhyBuyFromUs__link">Testimonials</a>
                        <a href="#" class="b-footerWhyBuyFromUs__link">Award winning</a>
                        <a href="index.php?page=brand" class="b-footerWhyBuyFromUs__link">Ethical trading</a>
                    </div>
                </div>
                <div class="b-footerYourAccount">
                    <h4 class="b-footerYourAccount__head b-footerYourAccount__head_bottom">Your account</h4>
                    <div class="b-footerYourAccount__links">
                        <a href="index.php?page=sign-in-and-register" class="b-footerYourAccount__link">Sign in</a>
                        <a href="index.php?page=sign-in-and-register" class="b-footerYourAccount__link">Register</a>
                        <a href="#" class="b-footerYourAccount__link">View cart</a>
                        <a href="#" class="b-footerYourAccount__link">View your lookbook</a>
                        <a href="#" class="b-footerYourAccount__link">Track an order</a>
                        <a href="#" class="b-footerYourAccount__link">Update information</a>
                    </div>
                </div>
                <div class="b-footerLookbook">
                    <h4 class="b-footerLookbook__head b-footerLookbook__head_bottom">Lookbook</h4>
                    <div class="b-footerLookbook__links">
                        <a href="index.php?page=lookbook" class="b-footerLookbook__link">Latest posts</a>
                        <a href="index.php?page=lookbookposts&sex=mens" class="b-footerLookbook__link">Men’s lookbook</a>
                        <a href="index.php?page=lookbookposts&sex=womens" class="b-footerLookbook__link">Women’s lookbook</a>
                        <a href="#" class="b-footerLookbook__link">Lookbooks RSS feed</a>
                        <a href="#" class="b-footerLookbook__link">View your lookbook</a>
                        <a href="#" class="b-footerLookbook__link">Delete your lookbook</a>
                    </div>
                </div>
                <div class="b-footerContactDetail">
                    <h4 class="b-footerContactDetail__head b-footerContactDetail__head_bottom">contact details</h4>
                    <div class="b-footerContactDetail__contacts">
                        <p class="b-footerContactDetail__address b-footerContactDetail__address_bottom">
                            Head Office: Avenue Fashion, 180-182 Regent Street, London.
                        </p>
                        <p class="b-footerContactDetail__data">Telephone: 0123-456-789 </p>
                        <p class="b-footerContactDetail__data">Email: <a href="#" class="b-footerContactDetail__link">support@yourwebsite.com</a></p>
                    </div>
                </div>
            </div>
            <div class="b-footerAdvert">
                
                <a href="#" class="b-footerAwardWinner">
                    <span class="b-footerAwardWinner_bold">award winner</span> fashion awards 2016
                </a>
                <div class="b-footerSocialIcons">
                    <a href="#" class="b-footerSocialIcons__icon"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="b-footerSocialIcons__icon"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="b-footerSocialIcons__icon"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="b-footerSocialIcons__icon"><i class="fab fa-pinterest"></i></a>
                </div>
            </div>
        </footer>

        <div class="b-basement">
            <p class="b-basement__itemCopy">
                <span class="b-basement__itemCopy_sign">&copy;</span>
                2016 Avenue Fashion
                <span class="b-basement__itemCopy_sign">&trade;</span>
            </p>
            <p class="b-basement__item">Design by <a href="#" class="b-basement__item">RobbyDesigns.com</a></p>
            <p class="b-basement__item">Dev by <a href="#" class="b-basement__item">Loremipsum.com</a></p>
        </div>

    </div>

    <script src="main.js"></script>
</body>
</html>
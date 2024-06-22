'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">sempre-linda documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdminModule-c6c0c230bd344de1a9b8ebcbc3eb2fafbd35bdc56f4f38cf6180fdd58cebae540feda076ac6fd4ed188a7a67e11f7edd97e50081d3d345adbc3c1fb4d0b64489"' : 'data-bs-target="#xs-components-links-module-AdminModule-c6c0c230bd344de1a9b8ebcbc3eb2fafbd35bdc56f4f38cf6180fdd58cebae540feda076ac6fd4ed188a7a67e11f7edd97e50081d3d345adbc3c1fb4d0b64489"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-c6c0c230bd344de1a9b8ebcbc3eb2fafbd35bdc56f4f38cf6180fdd58cebae540feda076ac6fd4ed188a7a67e11f7edd97e50081d3d345adbc3c1fb4d0b64489"' :
                                            'id="xs-components-links-module-AdminModule-c6c0c230bd344de1a9b8ebcbc3eb2fafbd35bdc56f4f38cf6180fdd58cebae540feda076ac6fd4ed188a7a67e11f7edd97e50081d3d345adbc3c1fb4d0b64489"' }>
                                            <li class="link">
                                                <a href="components/AheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReservationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReservationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidemenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidemenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-f41cdd1943ba18cd00a8755fd4cb1811c1e57c5be042ad191d93c31eeba99498764eceeed32d6d949f223efcc35347595ba2c9b0850f7e3e5224ccbfcce02c5c"' : 'data-bs-target="#xs-components-links-module-AppModule-f41cdd1943ba18cd00a8755fd4cb1811c1e57c5be042ad191d93c31eeba99498764eceeed32d6d949f223efcc35347595ba2c9b0850f7e3e5224ccbfcce02c5c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f41cdd1943ba18cd00a8755fd4cb1811c1e57c5be042ad191d93c31eeba99498764eceeed32d6d949f223efcc35347595ba2c9b0850f7e3e5224ccbfcce02c5c"' :
                                            'id="xs-components-links-module-AppModule-f41cdd1943ba18cd00a8755fd4cb1811c1e57c5be042ad191d93c31eeba99498764eceeed32d6d949f223efcc35347595ba2c9b0850f7e3e5224ccbfcce02c5c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppServerModule.html" data-type="entity-link" >AppServerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppServerModule-f9bd8a2e383e1fdb89b720482f275daf4d52b1791e7f4a876525a64e6683f175d787e6648760b5c33b83cc499537f1610a22f454735802bee0d2d5888220fb91"' : 'data-bs-target="#xs-components-links-module-AppServerModule-f9bd8a2e383e1fdb89b720482f275daf4d52b1791e7f4a876525a64e6683f175d787e6648760b5c33b83cc499537f1610a22f454735802bee0d2d5888220fb91"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppServerModule-f9bd8a2e383e1fdb89b720482f275daf4d52b1791e7f4a876525a64e6683f175d787e6648760b5c33b83cc499537f1610a22f454735802bee0d2d5888220fb91"' :
                                            'id="xs-components-links-module-AppServerModule-f9bd8a2e383e1fdb89b720482f275daf4d52b1791e7f4a876525a64e6683f175d787e6648760b5c33b83cc499537f1610a22f454735802bee0d2d5888220fb91"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthModule-e1b8d00d13ac32acdb404259b8480e449b7f961c6a78bf8bf4a70825dcd3073e8952571e2e3b424c0a6df688f8d0b73125e63707e1b49a6b8d79d15f756517c2"' : 'data-bs-target="#xs-components-links-module-AuthModule-e1b8d00d13ac32acdb404259b8480e449b7f961c6a78bf8bf4a70825dcd3073e8952571e2e3b424c0a6df688f8d0b73125e63707e1b49a6b8d79d15f756517c2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-e1b8d00d13ac32acdb404259b8480e449b7f961c6a78bf8bf4a70825dcd3073e8952571e2e3b424c0a6df688f8d0b73125e63707e1b49a6b8d79d15f756517c2"' :
                                            'id="xs-components-links-module-AuthModule-e1b8d00d13ac32acdb404259b8480e449b7f961c6a78bf8bf4a70825dcd3073e8952571e2e3b424c0a6df688f8d0b73125e63707e1b49a6b8d79d15f756517c2"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MenuModule.html" data-type="entity-link" >MenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MenuModule-d174218bf0c6439aae798b203d4b29af1fb3d05ed186ef90578ddbf6d619af142f8ffb6654762d7438804d4520398f73081d2fc96bbb2e72fd26b10f5afc77cf"' : 'data-bs-target="#xs-components-links-module-MenuModule-d174218bf0c6439aae798b203d4b29af1fb3d05ed186ef90578ddbf6d619af142f8ffb6654762d7438804d4520398f73081d2fc96bbb2e72fd26b10f5afc77cf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MenuModule-d174218bf0c6439aae798b203d4b29af1fb3d05ed186ef90578ddbf6d619af142f8ffb6654762d7438804d4520398f73081d2fc96bbb2e72fd26b10f5afc77cf"' :
                                            'id="xs-components-links-module-MenuModule-d174218bf0c6439aae798b203d4b29af1fb3d05ed186ef90578ddbf6d619af142f8ffb6654762d7438804d4520398f73081d2fc96bbb2e72fd26b10f5afc77cf"' }>
                                            <li class="link">
                                                <a href="components/MAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MenuModule.html" data-type="entity-link" >MenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MenuModule-342520b9d17b8bf35cff8e21064edfecca8258834085b85e474e84b39385c327aebf48ad4d0f5ad0c1eb6eefd79a36575cdd8f8b03758c5ee663699cdf1a4e1b-1"' : 'data-bs-target="#xs-components-links-module-MenuModule-342520b9d17b8bf35cff8e21064edfecca8258834085b85e474e84b39385c327aebf48ad4d0f5ad0c1eb6eefd79a36575cdd8f8b03758c5ee663699cdf1a4e1b-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MenuModule-342520b9d17b8bf35cff8e21064edfecca8258834085b85e474e84b39385c327aebf48ad4d0f5ad0c1eb6eefd79a36575cdd8f8b03758c5ee663699cdf1a4e1b-1"' :
                                            'id="xs-components-links-module-MenuModule-342520b9d17b8bf35cff8e21064edfecca8258834085b85e474e84b39385c327aebf48ad4d0f5ad0c1eb6eefd79a36575cdd8f8b03758c5ee663699cdf1a4e1b-1"' }>
                                            <li class="link">
                                                <a href="components/MenuDessertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuDessertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuEntreeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuEntreeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuPateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuPateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuPizzaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuPizzaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuViandeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuViandeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MenuRoutingModule.html" data-type="entity-link" >MenuRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MenuRoutingModule.html" data-type="entity-link" >MenuRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PublicModule-251b8f76cfe8121ae138621c264a7b7db7a6d97ca7b76dcbbcc8055a7f7f6b3d0c09d136dd221e47542b032b0a077a6f88805e0b4a363aad806fbaf8834674ab"' : 'data-bs-target="#xs-components-links-module-PublicModule-251b8f76cfe8121ae138621c264a7b7db7a6d97ca7b76dcbbcc8055a7f7f6b3d0c09d136dd221e47542b032b0a077a6f88805e0b4a363aad806fbaf8834674ab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-251b8f76cfe8121ae138621c264a7b7db7a6d97ca7b76dcbbcc8055a7f7f6b3d0c09d136dd221e47542b032b0a077a6f88805e0b4a363aad806fbaf8834674ab"' :
                                            'id="xs-components-links-module-PublicModule-251b8f76cfe8121ae138621c264a7b7db7a6d97ca7b76dcbbcc8055a7f7f6b3d0c09d136dd221e47542b032b0a077a6f88805e0b4a363aad806fbaf8834674ab"' }>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserModule-30430b4f5533263ae2fc59ad98dcdce5d93fb2896680d95cd1d2bb01fc9559c3e7c042e8a84aa6f442409a40f89ddc9227adfd1e46aabf8411ea7941e36d2c80"' : 'data-bs-target="#xs-components-links-module-UserModule-30430b4f5533263ae2fc59ad98dcdce5d93fb2896680d95cd1d2bb01fc9559c3e7c042e8a84aa6f442409a40f89ddc9227adfd1e46aabf8411ea7941e36d2c80"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-30430b4f5533263ae2fc59ad98dcdce5d93fb2896680d95cd1d2bb01fc9559c3e7c042e8a84aa6f442409a40f89ddc9227adfd1e46aabf8411ea7941e36d2c80"' :
                                            'id="xs-components-links-module-UserModule-30430b4f5533263ae2fc59ad98dcdce5d93fb2896680d95cd1d2bb01fc9559c3e7c042e8a84aa6f442409a40f89ddc9227adfd1e46aabf8411ea7941e36d2c80"' }>
                                            <li class="link">
                                                <a href="components/UAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ReservationComponent-1.html" data-type="entity-link" >ReservationComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
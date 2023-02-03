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
                    <a href="index.html" data-type="index-link">care-pay-frontend-assignment documentation</a>
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
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b3944b3b7a1e003790db893c822738b03ac4901bc0184ac74990f3a896cce7fd8ee1097e5f7f98de4aee07201e95745847eec1397d0a06aaf67279984d7c5cd6"' : 'data-target="#xs-components-links-module-AppModule-b3944b3b7a1e003790db893c822738b03ac4901bc0184ac74990f3a896cce7fd8ee1097e5f7f98de4aee07201e95745847eec1397d0a06aaf67279984d7c5cd6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b3944b3b7a1e003790db893c822738b03ac4901bc0184ac74990f3a896cce7fd8ee1097e5f7f98de4aee07201e95745847eec1397d0a06aaf67279984d7c5cd6"' :
                                            'id="xs-components-links-module-AppModule-b3944b3b7a1e003790db893c822738b03ac4901bc0184ac74990f3a896cce7fd8ee1097e5f7f98de4aee07201e95745847eec1397d0a06aaf67279984d7c5cd6"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FofErrorModule.html" data-type="entity-link" >FofErrorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FofErrorModule-98cb19563864b1b5a87b306da9c3b8156700eb304521e2ca1cdd524387e330006fdf8091e8e8eae5783ffa612bb2a122fc7e5441eb54f2da406bfed94b0c9d2d"' : 'data-target="#xs-components-links-module-FofErrorModule-98cb19563864b1b5a87b306da9c3b8156700eb304521e2ca1cdd524387e330006fdf8091e8e8eae5783ffa612bb2a122fc7e5441eb54f2da406bfed94b0c9d2d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FofErrorModule-98cb19563864b1b5a87b306da9c3b8156700eb304521e2ca1cdd524387e330006fdf8091e8e8eae5783ffa612bb2a122fc7e5441eb54f2da406bfed94b0c9d2d"' :
                                            'id="xs-components-links-module-FofErrorModule-98cb19563864b1b5a87b306da9c3b8156700eb304521e2ca1cdd524387e330006fdf8091e8e8eae5783ffa612bb2a122fc7e5441eb54f2da406bfed94b0c9d2d"' }>
                                            <li class="link">
                                                <a href="components/FofErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FofErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-a83ea8b8519bfc49e3bab1b29e9b65a0bea513815a21511abbd22cca201240883447a40003ee3e69b2ac04aa78a343a504a1f078fbe7cbcebbc3920f9de492c6"' : 'data-target="#xs-components-links-module-LayoutModule-a83ea8b8519bfc49e3bab1b29e9b65a0bea513815a21511abbd22cca201240883447a40003ee3e69b2ac04aa78a343a504a1f078fbe7cbcebbc3920f9de492c6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-a83ea8b8519bfc49e3bab1b29e9b65a0bea513815a21511abbd22cca201240883447a40003ee3e69b2ac04aa78a343a504a1f078fbe7cbcebbc3920f9de492c6"' :
                                            'id="xs-components-links-module-LayoutModule-a83ea8b8519bfc49e3bab1b29e9b65a0bea513815a21511abbd22cca201240883447a40003ee3e69b2ac04aa78a343a504a1f078fbe7cbcebbc3920f9de492c6"' }>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TreatmentsModule.html" data-type="entity-link" >TreatmentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TreatmentsModule-d61d810eaf1e86819d59fda65eff6516a746d2375db8ce980b28dc5fe8aeed22996dacaed027c3f95e4614896d2fa38e1a0ae37cfa2ff381634e13149841bb5c"' : 'data-target="#xs-components-links-module-TreatmentsModule-d61d810eaf1e86819d59fda65eff6516a746d2375db8ce980b28dc5fe8aeed22996dacaed027c3f95e4614896d2fa38e1a0ae37cfa2ff381634e13149841bb5c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TreatmentsModule-d61d810eaf1e86819d59fda65eff6516a746d2375db8ce980b28dc5fe8aeed22996dacaed027c3f95e4614896d2fa38e1a0ae37cfa2ff381634e13149841bb5c"' :
                                            'id="xs-components-links-module-TreatmentsModule-d61d810eaf1e86819d59fda65eff6516a746d2375db8ce980b28dc5fe8aeed22996dacaed027c3f95e4614896d2fa38e1a0ae37cfa2ff381634e13149841bb5c"' }>
                                            <li class="link">
                                                <a href="components/TreatmentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TreatmentsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TreatmentsModule-d61d810eaf1e86819d59fda65eff6516a746d2375db8ce980b28dc5fe8aeed22996dacaed027c3f95e4614896d2fa38e1a0ae37cfa2ff381634e13149841bb5c"' : 'data-target="#xs-injectables-links-module-TreatmentsModule-d61d810eaf1e86819d59fda65eff6516a746d2375db8ce980b28dc5fe8aeed22996dacaed027c3f95e4614896d2fa38e1a0ae37cfa2ff381634e13149841bb5c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TreatmentsModule-d61d810eaf1e86819d59fda65eff6516a746d2375db8ce980b28dc5fe8aeed22996dacaed027c3f95e4614896d2fa38e1a0ae37cfa2ff381634e13149841bb5c"' :
                                        'id="xs-injectables-links-module-TreatmentsModule-d61d810eaf1e86819d59fda65eff6516a746d2375db8ce980b28dc5fe8aeed22996dacaed027c3f95e4614896d2fa38e1a0ae37cfa2ff381634e13149841bb5c"' }>
                                        <li class="link">
                                            <a href="injectables/TreatmentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TreatmentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TreatmentsTableModule.html" data-type="entity-link" >TreatmentsTableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TreatmentsTableModule-d12350b42303ae1d19203947f259c2385db9a6386e91b79b61e216cd9698fb34ad8fddc6c1252e717b9ef9e71f078b58dc9aa7d297ad5913327f5404bea02dfb"' : 'data-target="#xs-components-links-module-TreatmentsTableModule-d12350b42303ae1d19203947f259c2385db9a6386e91b79b61e216cd9698fb34ad8fddc6c1252e717b9ef9e71f078b58dc9aa7d297ad5913327f5404bea02dfb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TreatmentsTableModule-d12350b42303ae1d19203947f259c2385db9a6386e91b79b61e216cd9698fb34ad8fddc6c1252e717b9ef9e71f078b58dc9aa7d297ad5913327f5404bea02dfb"' :
                                            'id="xs-components-links-module-TreatmentsTableModule-d12350b42303ae1d19203947f259c2385db9a6386e91b79b61e216cd9698fb34ad8fddc6c1252e717b9ef9e71f078b58dc9aa7d297ad5913327f5404bea02dfb"' }>
                                            <li class="link">
                                                <a href="components/TreatmentsTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TreatmentsTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/TreatmentService.html" data-type="entity-link" >TreatmentService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IHeaderMenuItem.html" data-type="entity-link" >IHeaderMenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITreatment.html" data-type="entity-link" >ITreatment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITreatmentFilter.html" data-type="entity-link" >ITreatmentFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITreatmentForm.html" data-type="entity-link" >ITreatmentForm</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
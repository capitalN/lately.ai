let navbar = ()=>{
    return `
    <div id="hootsuite">
    <div>✨ HOOTSUITE USERS ✨ Connect ANY Hootsuite account to Lately, so no need to switch! &nbsp;<a href="">Here’s how</a>.</div>
</div>
<div id="navbar">
    <div id="logodiv">
        <img src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd8f444e5106349b4570e0b_lately-nav-logo.svg" alt="logo">
        <div id="product">
            <a href="">Product</a>
            <i class="fas fa-angle-down"></i>
        </div>
        <div id="resources">
            <a href="">Resources</a>
            <i class="fas fa-angle-down"></i>
        </div>
        <div id="company">
            <a href="">Company</a>
            <i class="fas fa-angle-down"></i>
        </div>
        <a id="pricing" href="">Pricing</a>
    </div>
    <div id="logindiv">
        <button>Get Started</button>
        <a href="">LOG IN</a>
    </div>
</div>

    `
}

export {navbar}
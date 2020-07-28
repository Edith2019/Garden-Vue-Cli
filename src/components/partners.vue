<template >
    <div class="partner-container" >
        <div class="card Partner" >
            <div class="card-body" >
                <h1 class="card-title" >{{$t("Partners")}}</h1 >
                <p class="card-text" >
                 {{ $t("PartnerDesc")}}
                </p >
            </div >
        </div >
        <div class="card-deck rounded border" >
            <div id="hover" class="card" >
                <img
                    src="../assets/zuhause-min.jpg"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body" >
                    <a href="http://daszuhause.com" target="_blank" >
                        <h5 class="card-title" >Zuhause e.V.</h5 >
                    </a >
                    <p class="card-text" >
                                       {{ $t("ZH")}}

                    </p >
                    <p class="card-text" ></p >
                </div >
            </div >
            <div id="hover" class="card" >
                <img
                    src="../assets/Infozentrale-min.jpg"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body" >
                    <a href="https://www.infozentrale.berlin" target="_blank" >
                        <h5 class="card-title" >Infozentrale</h5 >
                    </a >
                    <p class="card-text" >
                          {{ $t("IZ")}}
                    </p >
                    <p class="card-text" ></p >
                </div >
            </div >
            <div id="hover" class="card" >
                <img
                    src="../assets/Maryon-min.png"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body" >
                    <a
                        class="main-card"
                        href="https://maryon.ch/stiftung/tochterunternehmen/terra-libra/herzlich-willkommen/"
                        target="_blank"
                    >
                        <h5 class="card-title" >Stiftung Edith Maryon</h5 >
                    </a >
                    <p class="card-text" >

                         {{ $t("Stif")}}
                    </p >
                    <p class="card-text" ></p >
                </div >
            </div >
        </div >
        <div id="friends" class="card Partner " >
            <div class="card-body" >
                <h1 class="card-title" >Friends</h1 >
                <p class="card-text" >
                    {{ $t("FriendsDesc")}}
                </p >
            </div >
        </div >
        <div class="row rounded border " >
            <div class="col-sm" >
                <div class="card border-success mb-5" style="max-width: 18rem;" >
                    <div class="card-header text-success" >Header</div >
                    <div class="card-body " >
                        <h5 class="card-title" > {{ $t("FriendsTitle1")}}</h5 >
                        <p class="card-text" >
                         {{ $t("FriendDesc1")}}
                        </p >
                    </div >
                </div >
            </div >
            <div class="col-sm" >
                <div class="card border-success mb-5" style="max-width: 18rem;" >
                    <div class="card-header text-success" >Header</div >
                    <div class="card-body " >
                        <h5 class="card-title" >{{ $t("FriendsTitle2")}}</h5 >
                        <p class="card-text" >
                            {{ $t("FriendDesc2")}}
                        </p >
                    </div >
                </div >
            </div >
            <div class="col-sm" >
                <div class="card border-success mb-5" style="max-width: 18rem;" >
                    <div class="card-header text-success" >Header</div >
                    <div class="card-body " >
                        <h5 class="card-title" >{{ $t("FriendsTitle3")}}</h5 >
                        <p class="card-text" >
                        {{ $t("FriendDesc3")}}
                        </p >
                    </div >
                </div >
            </div >
        </div >
    </div >
</template >

<script>
export default {
    name: "partners",
    props: {}
};
</script>

<style scoped>
.partner-container {
    height: auto;
    width: 90%;
    margin: 200px auto;
    padding-top: 100px;
}
.Partner {
    height: auto;
    margin-bottom: -5px;
    margin: auto;
}
#hover {
    transition: all 0.2s ease-in-out;
}
#hover:hover {
    transform: scale(1.1);
}
.card-deck {

    background-color: none;
    padding-top: 5%;
    padding-bottom: 5%;
}

.row {
    /* margin-left: 5%;
    margin-right: 5%; */
    background-color: none;
    padding-top: 5%;
    padding-bottom: 5%;
}

.card-deck.rounded.border {
    background-color: rgba(255, 255, 255, 0.9);
}
.row.rounded.border {
    background-color: rgba(255, 255, 255, 0.9);
}

#friends {
    margin-top: 100px;
}
    .card-deck.rounded.border{
margin: 0px;
}

.row.rounded.border{
margin: 0px;
}

@media only screen and (min-width: 1300px) {
.partner-container {
       width: 70%;
    }
    .card-deck.rounded.border{
margin: 0px;
}

.row.rounded.border{
margin: 0px;
}
}
</style>

<template>
    <div class="login">
        <div class="box-login">
            <h2>HỆ THỐNG QUẢN LÝ THANH TRA KIỂM TRA</h2>
            <div class="row">
                <div class="col-md-3 col-12 logo">
                    <img :src="require('../../assets/images/logo_bhxh.svg')"  alt="">
                </div>
                <div class="col-md-9 col-12">
                   
                    <div class="form-group">
                        <div class="list-input input-ma">
                            <span class="fa fa-ma"><img :src="require('../../assets/images/folder.svg')"  alt=""> </span>
                            <input type="text" v-model="ma" v-on:change="getTenDonVi($event)" class="form-control" id="_ma"  placeholder="Mã">
                            <input type="text" v-model="coquan" disabled class="form-control" id="_coquan"  placeholder="Tên cơ quan">
                        </div>
                        <div class="list-input input-user">
                            <span class="fa fa-user"> <img :src="require('../../assets/images/user.svg')"  alt=""> </span>
                            <input type="text" v-model="user" class="form-control" id="_user"  placeholder="Tên đăng nhập">
                        </div>
                        <div class="list-input input-password">
                            <span class="fa fa-pass"> <img :src="require('../../assets/images/lock.svg')"  alt=""> </span>
                            <input type="password" v-model="password" class="form-control" id="_password"  placeholder="Mật khẩu">
                        </div>
                        <div class="list-input">
                            <button @click="submit" class="btn-login">Đăng nhập</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            ma:"",
            coquan:"",
            user:"",
            paasowrd:""
        }
    },
    computed :{
        getTenDV()
        {
            return this.$store.getters['auth/getTenDonVi'];
        }
    },

    watch :{
         
    },
    methods: {
        submit(){
            this.$store.dispatch("auth/login",{
                infoLogin : {
                    maDonVi : this.ma,
                    username : this.user,
                    password : this.password
                }
            }).then( ()=>{
                this.$router.push('/')
            })
        },
        async getTenDonVi(event){
            await this.$store.dispatch("auth/getMaDonVi",{
                ma : event.target.value
            })
            this.coquan =this.getTenDV
        } 
    },
}
</script>

<style scoped>

.login{
    background-color: #EFEFEF;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
}

.box-login{
    width: 527px;
    height: 337px;
    border: 1px solid #5BC0DE;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.75);
    background-color: #E2F1F2;
    box-sizing: border-box;
    text-align: center;
}

h2 {
    font-weight: bold;
    margin-top: 63px;
    color: #0057AF;
    font-size: 24px;
}

.logo{
    padding-left: 16px;
    width: 102px;
    margin-top: 56px;
}
.logo img {
    padding-left: 16px;
}

.list-input{
    height: 30px;
}

#_ma{
    width: 73px;
}

#_coquan{
    width: 227px;
}

#_user,#_password {
    width: 303px;
    height: 30px;
    margin-top: 15px;
}

.input-ma{
    margin-top: 40px;
    display: flex;
}

.input-user,.input-password{
    display: flex;
}

.input-password{
    margin-top: 15px;
}

::placeholder { 
  color: #333;
  font-size: 13px;
  font-style: italic;
}

.fa{
    border: 1px solid #C0CDCE;
    border-radius: 2px;
    background-color: #ECEEEF;
}

.fa img{
    width: 16px;
}

.fa-user,.fa-pass {
    width: 37px;
    margin-top: 15px;
    height: 30px;
}

.fa-ma {
    width: 41px;
}

.btn-login{
    margin-top: 28px;
    margin-left: -294px;
    border: 1px solid #C0CDCE;
    border-radius: 4px;
    background-color: #01C48C;
    color: white;
    width: 91px;
    height: 33px;
    font-size: 14px;
}

button{
    cursor: pointer;
}

/* mobile */
@media only screen and (max-width : 768px){
.box-login{
    width: 479px;
    height: 505px;
}

.logo{
    text-align: center;
}

}
</style>

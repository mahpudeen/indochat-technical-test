<template>
  <q-page>
    <div class="row" v-if="windowWidth > 700">
      <div class="col">
        <q-img
          src="/images/laptop.png"
          style="width: 108%"
        > 
        <div class="txtcenter" style="background:transparent;color:#000000">
          <div>
            <span class="fs20m"><b>Booked Tool</b> enables you to <br> create Interactive Advertisement</span>
          </div>
          <div>
            <q-btn color="primary" no-caps label="What is it?" style="margin-top:10px" @click="detectMob()"/>
          </div>
        </div>
        </q-img>
      </div>
      <div class="col">
        <q-img
          src="/images/keyboard.png"
        />
      </div>
    </div>
    <div v-else>
      <div >
        <q-img
          src="/images/laptop.png"
        > 
        <div class="txtcenter" style="background:transparent;color:#000000">
          <div>
            <span class="fs20m"><b>Booked Tool</b> enables you to <br> create Interactive Advertisement</span>
          </div>
          <div>
            <q-btn color="primary" no-caps label="What is it?" style="margin-top:10px" @click="detectMob()"/>
          </div>
        </div>
        </q-img>
      </div>
      <div >
        <q-img
          src="/images/keyboard.png"
        />
      </div>
    </div>
    <!-- ------ -->
    <div class="row bggrey flex flex-center" v-if="windowWidth > 700">
      <div class="col-1"></div>
      <div class="col">
        <span class="fs20m">Please login to start using <br> <b>Booked Tool</b></span>
      </div>
      <div style="width:1%"/>
      <div class="col">
          <q-input outlined bg-color="white" label="Email" />
      </div>
      <div style="width:1%"/>
      <div class="col">
          <q-input outlined bg-color="white" label="Password" type="password"/>
      </div>
      <div style="width:1%"/>
      <div class="col">
          <q-btn color="primary" no-caps label="Login" />
      </div>
    </div>
    <div class="row bggrey flex flex-center" v-else>
      <div class="col-1"></div>
      <div class="col ctr">
      <div class="martop10">
        <span class="fs20m">Please login to start using <br> <b>Booked Tool</b></span>
      </div>
      <div class="martop10">
          <q-input outlined bg-color="white" label="Email" />
      </div>
      <div class="martop10">
          <q-input outlined bg-color="white" label="Password" type="password"/>
      </div>
      <div class="martop10">
          <q-btn color="primary" no-caps label="Login" />
      </div>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row" v-if="windowWidth > 700">
      <div class="col"/>
      <div class="col-8 ctr">
          <div class="martop30">
            <i class="fas fa-desktop fa-3x"></i>
          </div>
          <div class="martop10">
            <span class="fs20"><b>DISCOVER</b> <br> BOOKED TOOL</span>
          </div>
          <div class="martop10">
            <q-img
              :transition="trans"
              :src="img"
              style="width: 751px;width:501px"
              spinner-color="white"
              class="rounded-borders"
            />
          </div>
        <div class="row">
          <div class="col"/>
          <div class="col-8 left">
            <q-tabs
                v-model="tab"
                dense
                active-color="primary"
                indicator-color="primary"
                align="justify"
            >
                <q-tab name="discover1" no-caps @click="changeTab(1)" label="Discover A"/>
                <q-tab name="discover2" no-caps @click="changeTab(2)" label="Discover B" />
                <q-tab name="discover3" no-caps @click="changeTab(3)" label="Discover C" />
                <q-tab name="discover4" no-caps @click="changeTab(4)" label="Discover D" />
              </q-tabs>

              <q-separator />

              <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="discover1" class="q-pa-l">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </q-tab-panel>
                <q-tab-panel name="discover2" class="q-pa-l">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </q-tab-panel>
                <q-tab-panel name="discover3" class="q-pa-l">
                  But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                </q-tab-panel>
                <q-tab-panel name="discover4" class="q-pa-l">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
                </q-tab-panel>
              </q-tab-panels>
          </div>
          <div class="col"/>            
        </div>
      </div>
      <div class="col"/>
    </div>
    <div v-else>
      <div class="ctr">
          <div class="martop30">
            <i class="fas fa-desktop fa-3x"></i>
          </div>
          <div class="martop10">
            <span class="fs20"><b>DISCOVER</b> <br> BOOKED TOOL</span>
          </div>
          <div class="martop10">
            <q-img
              :transition="trans"
              :src="img"
              style="width: 100%"
              spinner-color="white"
              class="rounded-borders"
            />
          </div>
        <div class="row">
          <div class="col left">
            <q-tabs
                v-model="tab"
                dense
                active-color="primary"
                indicator-color="primary"
                align="justify"
            >
                <q-tab name="discover1" no-caps @click="changeTab(1)" label="Discover A"/>
                <q-tab name="discover2" no-caps @click="changeTab(2)" label="Discover B" />
                <q-tab name="discover3" no-caps @click="changeTab(3)" label="Discover C" />
                <q-tab name="discover4" no-caps @click="changeTab(4)" label="Discover D" />
              </q-tabs>

              <q-separator />

              <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="discover1" class="q-pa-l">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </q-tab-panel>
                <q-tab-panel name="discover2" class="q-pa-l">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </q-tab-panel>
                <q-tab-panel name="discover3" class="q-pa-l">
                  But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                </q-tab-panel>
                <q-tab-panel name="discover4" class="q-pa-l">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
                </q-tab-panel>
              </q-tab-panels>
          </div>          
        </div>
      </div>
    </div>
    <div class="row bggrey" v-if="windowWidth > 700">
      <div class="col"/>
      <div class="col-8 ctr">
        <i class="far fa-clipboard fa-3x"></i>
        <div class="martop10">
          <span class="fs20"><b>Get in touch</b> <br>Want to get in touch? We'd love to hear from you. Here's how you can reach us..</span>
        </div>
        <div class="martop30">
          <q-input outlined bg-color="white" label="Search..">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div class="row martop30">
          <div class="col left">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.620967517708!2d106.82200961402762!3d-6.181458095524855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42c022144c3%3A0xfe6941ee5d3ab9d8!2sWisma%20Antara%2C%20Jl.%20Medan%20Merdeka%20Sel.%20No.17%2C%20RT.11%2FRW.2%2C%20Gambir%2C%20Kecamatan%20Gambir%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010110!5e0!3m2!1sid!2sid!4v1606340835348!5m2!1sid!2sid" width="100%" height="420" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
          <div class="col left bgwhite">
            <b class="fs20">Feedback</b>
            <div class="row martop10">
              <div class="col-5">
                <q-input outlined bg-color="white" label="First"/>
              </div>
              <div style="width:2%"/>
              <div class="col">
                <q-input outlined bg-color="white" label="Last"/>
              </div>
            </div>
            <div class="martop10">
              <q-input outlined bg-color="white" label="Email"/>
            </div>
            <div class="martop10">
              <q-input outlined bg-color="white" label="Message" type="textarea"/>
            </div>
            <div class="martop10">
              <q-btn color="primary" no-caps label="Send" />
            </div>
          </div>
        </div>
      </div>
      <div class="col"/>
      
    </div>
    <div class="row bggrey" v-else>
      <div class="ctr">
        <i class="far fa-clipboard fa-3x"></i>
        <div class="martop10">
          <span class="fs20"><b>Get in touch</b> <br>Want to get in touch? We'd love to hear from you. Here's how you can reach us..</span>
        </div>
        <div class="martop30">
          <q-input outlined bg-color="white" label="Search..">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div class="martop30" style="margin-left:-50px;margin-right:-50px">
          <div class="left">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.620967517708!2d106.82200961402762!3d-6.181458095524855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42c022144c3%3A0xfe6941ee5d3ab9d8!2sWisma%20Antara%2C%20Jl.%20Medan%20Merdeka%20Sel.%20No.17%2C%20RT.11%2FRW.2%2C%20Gambir%2C%20Kecamatan%20Gambir%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010110!5e0!3m2!1sid!2sid!4v1606340835348!5m2!1sid!2sid" width="100%" height="420" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
          <div class="left bgwhite">
            <b class="fs20">Feedback</b>
            <div class="row martop10">
              <div class="col-5">
                <q-input outlined bg-color="white" label="First"/>
              </div>
              <div style="width:2%"/>
              <div class="col">
                <q-input outlined bg-color="white" label="Last"/>
              </div>
            </div>
            <div class="martop10">
              <q-input outlined bg-color="white" label="Email"/>
            </div>
            <div class="martop10">
              <q-input outlined bg-color="white" label="Message" type="textarea"/>
            </div>
            <div class="martop10">
              <q-btn color="primary" no-caps label="Send" />
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  </q-page>
</template>

<style>

</style>

<script>
export default {
  name: 'Homepage',
  data() {
      return {
        tab : 'discover1',
        img : "/images/screen.png",
        trans : "rotate",
        windowWidth: window.innerWidth
      }
  },
  mounted() {
      window.onresize = () => {
          this.windowWidth = window.innerWidth
      }
  },
  methods : {
    changeTab(item) {
      if (item==1) {
        this.img = "/images/screen.png"
        this.trans = "rotate"
      } else if (item==2) {
        this.img = "/images/screen2.jpg"
        this.trans = "flip-up"
      } else if (item==3) {
        this.img = "/images/screen3.jpg"
        this.trans = "scale"
      } else if (item==4) {
        this.img = "/images/screen4.jpeg"
        this.trans = "jump-down"
      }
    },
    
  }
}
</script>
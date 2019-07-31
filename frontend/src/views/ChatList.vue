<template>
  <v-container fluid fil-height>
    <v-layout column>
      <v-flex xs12>
        <p style = "font-size:55px;font-weight:bold;text-align:center">Beantin<span style = "color:#93e77f">g</span></p>
        <div class="resultContainer">
          <v-layout v-bind="layoutAttributes" justify-space-around style = "margin-top:7%">
            <div class="item elevation-5">
              <v-card
                class="mx-auto elevation-20"
                color="#93e77f"
                dark
                style="width: 400px;"
              >
                <v-layout justify-center style="background-color:#212121">
                  <v-flex xs>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Classmate</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                </v-layout>
                <v-layout justify-space-between>
                  <v-flex xs8>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">신소휘</div>
                        <div>나는 산호수</div>
                        <div>3108</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                  <v-img
                    class="shrink ma-2"
                    contain
                    height="125px"
                    src="https://ncache.ilbe.com/files/attach/new/20171214/377678/10196464208/10201424740/8f143e223d425aa1bda27ce4df2c0c13.jpg"
                    style="flex-basis: 125px"
                  ></v-img>
                </v-layout>
                <v-divider dark></v-divider>
                <v-layout justify-space-between>
                  <v-flex xs8>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">최화랑</div>
                        <div>아임 쵤활랑</div>
                        <div>3119</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                  <v-img
                    class="shrink ma-2"
                    contain
                    height="125px"
                    src="https://s-i.huffpost.com/gen/3948866/thumbs/o-PEPE-THE-FROG-570.jpg?3  "
                    style="flex-basis: 125px"
                  ></v-img>
                </v-layout>
                <v-divider dark></v-divider>
                  <v-layout justify-space-between>
                  <v-flex xs8>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">최현진</div>
                        <div>zzzzzz</div>
                        <div>3115</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                  <v-img
                    class="shrink ma-2"
                    contain
                    height="125px"
                    src="https://ncache.ilbe.com/files/attach/new/20171214/377678/10196464208/10201424740/8f143e223d425aa1bda27ce4df2c0c13.jpg"
                    style="flex-basis: 125px"
                  ></v-img>
                </v-layout>
              </v-card>
            </div>
            <div class="item elevation-5">
              <v-card
                class="mx-auto elevation-20"
                color="#93e77f"
                dark
                style="width: 400px;"
              >
                <v-layout justify-space-between style="background-color:#212121">
                  <v-flex xs>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Group</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                </v-layout>
                <v-layout justify-space-between>
                  <v-flex xs8>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">신소휘</div>
                        <div>나는 산호수</div>
                        <div>3108</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                  <v-img
                    class="shrink ma-2"
                    contain
                    height="125px"
                    src="https://ncache.ilbe.com/files/attach/new/20171214/377678/10196464208/10201424740/8f143e223d425aa1bda27ce4df2c0c13.jpg"
                    style="flex-basis: 125px"
                  ></v-img>
                </v-layout>
                <v-divider dark></v-divider>
                <v-layout justify-space-between>
                  <v-flex xs8>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">최화랑</div>
                        <div>아임 쵤활랑</div>
                        <div>3119</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                  <v-img
                    class="shrink ma-2"
                    contain
                    height="125px"
                    src="https://s-i.huffpost.com/gen/3948866/thumbs/o-PEPE-THE-FROG-570.jpg?3  "
                    style="flex-basis: 125px"
                  ></v-img>
                </v-layout>
                <v-divider dark></v-divider>
                  <v-layout justify-space-between>
                  <v-flex xs8>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">최현진</div>
                        <div>zzzzzz</div>
                        <div>3115</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                  <v-img
                    class="shrink ma-2"
                    contain
                    height="125px"
                    src="https://ncache.ilbe.com/files/attach/new/20171214/377678/10196464208/10201424740/8f143e223d425aa1bda27ce4df2c0c13.jpg"
                    style="flex-basis: 125px"
                  ></v-img>
                </v-layout>
              </v-card>
            </div>
          </v-layout>
        </div>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  export default {
    data: () => ({
      rating: 4.3
    })
  }
</script> 
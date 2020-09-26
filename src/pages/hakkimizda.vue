<template>
  <div :class="{ container: true, 'py-4 px-4': $device.isMobile }">
    <div class="columns">
      <div class="column content">
        <p>
          IZM Game Studios, 26 Eylül 2019 tarihinde Sakarya'nın Akyazı ilçesinde
          kurulmuş, daha çok gençlere ve teknolojiye yönelik her yaştan insana
          hitap eden bir yazılım şirketidir. Sadece yazılım ile sınırlı
          kalmadığımız firmamızda aynı zamanda her türlü içerik üretimine,
          turnuvalara ve yarışmalara da yer verilmektedir. Bunların yanı sıra
          kendilerini geliştirmek isteyenlere her türlü ekipman desteği ve
          eğitim verilir.
        </p>

        <p>
          Bir yılını geride bırakan firmamız, şimdiden bir çok yetenekli gence
          ev sahipliği yapmış, gerek yazılımsal, gerekte okul ve diğer hobileri
          konusunda onları geliştirmeye çalışmıştır. Bu sayede gençleri
          sıkmadan, yormadan kaliteli eğitim vermeyi başarmıştır.
        </p>

        <p>
          Akyazı'nın, ilk ve tek oyun stüdyosu olan IZM Game Studios, sadece bu
          alanda hizmet vermeyen bu alanların yanında
          <strong>içerik üretme</strong>, <strong>video ve yayıncılık</strong>,
          <strong>profesyonel fotoğraf çekimi</strong>,
          <strong>aşçılık</strong>,
          <strong>modelleme ve resim çizme</strong> gibi alanlarda da
          öğrencilerine eğitim veren temiz ve güvenli bir ofistir. Bu ofiste
          öğrenciler istedikleri her türden içerikleri üretmekte serbest,
          istedikleri gibi <strong>ekipman kullanımında</strong> bulunmakta
          özgürdür.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 1024px) {
  .content {
    margin-top: 2em;
    margin-bottom: 3em;
  }
}
</style>

<script>
export default {
  head: {
    title: "Hakkımızda",
  },
};
</script>
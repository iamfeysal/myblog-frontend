// sleep=(ms)=>{
//   return new Promise(resolve => setTimeout(resolve, ms));
// };
// async function nowsleep(x) {
//   await sleep(x);
// }
// choose= (id)=>{
//   if ($("#likeicon"+id).hasClass("loved")){
//       return unlike(id)
//   }
//   like(id)
// };
//
// like = (id)=>{
//     $.get( id,(newlikes)=>{
//         console.log(id)
//         anim=$("#likeheart"+id);
//         anim.show(300);
//         nowsleep(600).then(()=>{
//                 anim.hide(50);
//                 $("#likeicon"+id).addClass("loved")
//                 $("#likespan"+id).text(newlikes)
//             }
//         )
//     });
// };
// unlike = (id)=>{
//     $.get( id,(newlikes)=>{
//         nowsleep(600).then(()=>{
//                 $("#likeicon"+id).removeClass("loved");
//                 $("#likespan"+id).text(newlikes)
//             }
//         )
//     });
// };
// togglesave = (id)=>{
//     $.get(id,()=>{
//         let anim=$("#saveicon"+id);
//         anim.toggleClass("saved");
//     });
// };


function toggleLike(post_id){
      console.log(post_id)
      $.ajax({
        url: /post_like/,
        // type:'POST',
        data: {
                'id': post_id
            },
        success: function(data) {
            alert('success')
          // {#$("#likeCount" + data).html(data.like_count + ' likes');#}
          // {#$("#imageElement" + data).html(data.img);#}
        },

      });
};
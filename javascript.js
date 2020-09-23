<script language="javascript">
    function changeImage() {

        if (document.getElementById("imgClickAndChange").src == "placeholder.png") 
        {
            document.getElementById("imgClickAndChange").src = "placeholder2.png";
        }
        else if (document.getElementById("imgClickAndChange").src == "placeholder2.png)
        {
          document.getElementById("imgClickAndChange").src = "placeholder3.png";
        }
        else 
        {
            document.getElementById("imgClickAndChange").src = "placeholder.png";
        }
    }
</script>

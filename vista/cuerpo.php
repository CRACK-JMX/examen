<article id="post-9945" class="post-9945 post type-post status-publish format-standard has-post-thumbnail hentry category-elecciones tag-ciudadanos-uni2 tag-elecciones tag-iecm tag-jornada-electoral tag-mapas-de-la-c tag-mapas-de-la-cdmx tag-mapas-del-df tag-mapas-electorales tag-marco-geografico-electoral tag-proceso-electoral tag-secciones-electorales">
     <h1 class="post-title">Consulta datos de una IP</h1>
     <!-- Region Instituto -->
     <div class="regionInstituto col-shrink-2 box-padding">
         <section id="media_image-3" class="roundedCornerBig-Top-Left widget home_instituto widget_media_image">
             
         </section>
         
         <section id="custom_html-3" class="widget_text roundedCornerMid-Bottom-Right bgMorado-osc boxPadding widget home_instituto widget_custom_html">
             <div class="textwidget custom-html-widget">
                <form >
                  <label for="ip">Ingresa una IP:</label>
                  <input type="text" id="ip" name="ip" value="">
                  <input type="text" id="opcion" name="opcion" value="ip" style="display: none;"><br><br>
                  <input type="button" id = 'consultar' value="Consultar" onclick="obtenerDatosIP()">
                </form>
             </div>
         </section>
         <br>
         <br>
         <table id = 'tabla_resumen' class="table table-striped table-responsive table-condensed" style="color: #956BB0">
             
         </table>

         <br><br>
        <div id="map1" style="display: none; overflow: visible !important; height: 600px !important">
        </div>
        <br>

         <!-- Tabla historica -->
         <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Filtrar">

         <table id = 'tabla_historico' class="table table-striped  table-responsive table-condensed"
                style="color: #956BB0; display: flow;">
             <thead>
                    <tr>
                        <th data-field="ip" data-filter-control="select" data-sortable="true">IP</th>
                        <th data-field="code" data-filter-control="select" data-sortable="true" style="font-size: 12px;">Código de país</th>
                        <th data-field="name" data-filter-control="select" data-sortable="true">País</th>
                        <th data-field="continente" data-filter-control="select" data-sortable="true">Municipio</th>
                        <th data-field="timezone" data-filter-control="select" data-sortable="true">ISP</th>
                        <th data-field="areacode" data-filter-control="select" data-sortable="true">Lenguajes</th>
                        <th data-field="lat" data-filter-control="select" data-sortable="true">Latitud</th>
                        <th data-field="lng" data-filter-control="select" data-sortable="true">Longitud</th>
                    </tr>
            </thead>
     
        </table>

        

     </div>
     <!-- END Region Instituto -->
 </article>
 <!-- .content-area -->
 
 
 

 
 <br>
 <br>
 <section id="elecciones_widget-2" class="textVerde col-md-12 widget home_elecciones elecciones_widget">
     <div class="container col-md-8 col-sm-12">
    </div>
 </section>

 <!-- The Modal -->
 <div class="modal" id="myModal">
   <div class="modal-dialog">
     <div class="modal-content">

       <!-- Modal Header -->
       <div class="modal-header">
         <h4 class="modal-title"></h4>
         <button type="button" class="btn-close" data-bs-dismiss="modal" onclick="cerrarModal()"></button>
       </div>

       <!-- Modal body -->
       <div class="modal-body">
         Éste registro ya existe
       </div>

       <!-- Modal footer -->
       <div class="modal-footer">
         <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="cerrarModal()">Cerrar</button>
       </div>

     </div>
   </div>
 </div>



 <script>

    setTimeout(function() {
         cargar_();
     }, 500);
 </script>


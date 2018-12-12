import {Component, OnInit} from '@angular/core';
import {PaginatedMedia} from '../../../../model/media-paginate.model';
import {MediaService} from '../../../../services/media.service';
import {environment} from './../../../../../environments/environment.prod';

@Component({
    selector: 'app-media-video',
    templateUrl: './media-video.component.html',
    styleUrls: ['./media-video.component.css']
})
export class MediaVideoComponent implements OnInit {

    mediaVideos: PaginatedMedia;
    htmlSideRight: string;

    selected: any;

    constructor(
        private mediaVideoService: MediaService,
    ) {
    }

    ngOnInit() {
    }

    loadMediaVideo() {
        this.htmlSideRight = '';
        this.mediaVideoService.getMediaVideo().then(mediaVideos => this.mediaVideos = mediaVideos);
    }
    isActive(item) {
        return this.selected === item;
    }
    select(item) {
        console.log(item);
        this.selected = item;
        this.htmlSideRight = '<div id="attachment-details">' +
            '           <div tabindex="0" data-id="184" class="attachment-details save-ready">' +
            '                                <h2>' +
            '                                    Chi tiết đính kèm <span class="settings-save-status">' +
            '                                        <span class="spinner"></span>' +
            '                                        <span class="saved">Đã lưu.</span>' +
            '                                    </span>' +
            '                                </h2>' +
            '                                <div class="attachment-info">' +
            '                                   <div class="thumbnail thumbnail-video">' +
            '                                       <img src="' + `${environment.storage_url}` + item.thumbnails.medium + '">' +
            '                                           <a class="media-play-button"></a>' +
            '                                       <div class="hidden-video-player"></div>' +
            '                                       </div>' +
            '                                    <div class="details">' +
            '                                        <div class="file-size media-view-info"><i class="fa fa-info"></i>12MB</div>' +
            '                                        <div class="uploaded media-view-info"><i class="fa fa-clock-o"></i>' + item.created_at + '</div>' +
            '                                        <div class="uploaded media-view-info"><i class="fa fa-file"></i>' + item.mime_type + '</div>' +
            '                                    </div>' +
            '                                    <div class="MediaVideoFunction">' +
            '                                       <div id="MediaEditThumbVideo" class="MediaBtn BtnMedium"><i class="fa fa-photo"></i> Thay avatar</div>' +
            '                                       <div id="MediaCutVideo" class="MediaBtn BtnMedium"><i class="fa fa-cut"></i> Cắt</div>' +
            '                                       <div id="MediaVideoDownload" class="MediaBtn BtnMedium"><i class="fa fa-download"></i></i> Tải xuống</div>' +
            '                                    </div>' +
            '                                </div>' +
            '                                <label class="setting" data-setting="url">' +
            '                                    <span class="name">URL</span>' +
            '                                    <input type="text" value="' + item.path + '" readonly=""/>' +
            '                                </label>' +
            '                                <label class="setting" data-setting="title">' +
            '                                    <span class="name">Tiêu đề</span>' +
            '                                    <input type="text" value="' + item.name + '">' +
            '                                </label>' +
            '                                <label class="setting" data-setting="caption">' +
            '                                    <span class="name">Chú thích</span>' +
            '                                    <textarea></textarea>' +
            '                                </label>' +
            '                            </div>' +

            '                            <div class="attachment-display-settings">' +
            '                                <h2>Tùy chọn hiển thị nội dung đính kèm</h2>' +
            '                                <label class="setting">' +
            '                                    <span>Căn chỉnh</span>' +
            '                                    <select class="alignment" data-setting="align" data-user-setting="align">' +

            '                                        <option value="left">' +
            '                                            Trái' +
            '                                        </option>' +
            '                                        <option value="center">' +
            '                                            Chính giữa' +
            '                                        </option>' +
            '                                        <option value="right">' +
            '                                            Phải' +
            '                                        </option>' +
            '                                        <option value="none" selected="">' +
            '                                            Trống' +
            '                                        </option>' +
            '                                    </select>' +
            '                                </label>' +

            '                                <div class="setting">' +
            '                                    <label>' +
            '                                        <span>Liên kết tới</span>' +
            '                                        <select class="link-to" data-setting="link" data-user-setting="urlbutton">' +
            '                                            <option value="none" selected=""> Trống </option>' +
            '                                            <option value="file"> Tập tin đa phương tiện </option>' +
            '                                            <option value="post"> Trang nội dung đính kèm </option>' +
            '                                            <option value="custom"> URL tùy chỉnh </option>' +
            '                                        </select>' +
            '                                    </label>' +
            '                                    <input type="text" class="link-to-custom hidden" data-setting="linkUrl">' +
            '                                </div>' +
            '                                <label class="setting">' +
            '                                    <span>Kích cỡ</span>' +
            '                                    <select class="size" name="size" data-setting="size" data-user-setting="imgsize">' +
            '                                        <option value="full" selected="selected">' +
            '                                            Kích thước đầy đủ – 960 × 1280' +
            '                                        </option>' +
            '                                    </select>' +
            '                                </label>' +
            '                            </div>' +
            '         </div>';
    }

}
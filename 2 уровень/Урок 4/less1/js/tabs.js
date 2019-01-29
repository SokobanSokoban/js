// ��� jQuery ��� ������ �������

$(function () {
    var tabsContainers = $('#tabs > div');                           // �������� ������ ����������� �������
    tabsContainers.hide().filter(':first').show();                   // ������ ���, ����� �������
                                    
    $('#tabs ul.tabNav a').click(function () {                       // ������������ ���� �� �������
        tabsContainers.hide();                                       // ������ ��� �������
        tabsContainers.filter(this.hash).show();                     // ���������� ���������� ������� �������
        $('#tabs ul.tabNav a').removeClass('selected');              // � ���� ������� ����� 'selected'
        $(this).addClass('selected');                                // ������� ������� ��������� ����� 'selected'
        return false;
    }).filter(':first').click();
});
/* ==========================================================================
   R8 FRISEUR - ADMIN PANEL & STAFF PROFILE DASHBOARD LOGIC
   ========================================================================== */

const STAFF_PROFILES = {
    'ALL': {
        key: 'ALL',
        name: 'Genel Yönetici',
        role: 'Tüm Salon Yönetimi',
        section: 'Tüm Salon',
        badgeClass: 'gold',
        sub: 'Herren ve Damen tüm randevular listeleniyor.',
        icon: '<i class="fa-solid fa-shield-halved"></i>',
        photo: null
    },
    'Ahmet (Master Barber)': {
        key: 'Ahmet (Master Barber)',
        name: 'Ahmet',
        role: 'Master Stylist & Fade Spezialist',
        section: 'Herren / Erkek',
        badgeClass: 'herren',
        sub: 'Sadece Ahmet için alınan randevular listeleniyor.',
        icon: '<i class="fa-solid fa-user-tie"></i>',
        photo: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&auto=format&fit=crop&q=80'
    },
    'Can (Beard & Style)': {
        key: 'Can (Beard & Style)',
        name: 'Can',
        role: 'Bart- & Haar-Experte',
        section: 'Herren / Erkek',
        badgeClass: 'herren',
        sub: 'Sadece Can için alınan randevular listeleniyor.',
        icon: '<i class="fa-solid fa-user-gear"></i>',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80'
    },
    'Elena (Balayage Expert)': {
        key: 'Elena (Balayage Expert)',
        name: 'Elena',
        role: 'Master Hair Stylist & Balayage Expertin',
        section: 'Damen / Kadın',
        badgeClass: 'damen',
        sub: 'Sadece Elena için alınan randevular listeleniyor.',
        icon: '<i class="fa-solid fa-wand-magic-sparkles"></i>',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80'
    },
    'Aylin (Styling & Cut)': {
        key: 'Aylin (Styling & Cut)',
        name: 'Aylin',
        role: 'Schnitt-, Föhn- & Keratin-Spezialistin',
        section: 'Damen / Kadın',
        badgeClass: 'damen',
        sub: 'Sadece Aylin için alınan randevular listeleniyor.',
        icon: '<i class="fa-solid fa-gem"></i>',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'
    }
};

let currentActiveStaff = 'ALL';

document.addEventListener('DOMContentLoaded', () => {
    initAdmin();
});

function initAdmin() {
    const searchInput = document.getElementById('searchInput');
    const dateFilter = document.getElementById('dateFilter');
    const genderFilter = document.getElementById('genderFilter');
    const barberFilter = document.getElementById('barberFilter');
    const statusFilter = document.getElementById('statusFilter');

    if (searchInput) searchInput.addEventListener('input', renderDashboard);
    if (dateFilter) dateFilter.addEventListener('change', renderDashboard);
    if (genderFilter) genderFilter.addEventListener('change', renderDashboard);
    if (barberFilter) barberFilter.addEventListener('change', renderDashboard);
    if (statusFilter) statusFilter.addEventListener('change', renderDashboard);

    updateStaffBadges();
}

function getAppointments() {
    return JSON.parse(localStorage.getItem('barberAppointments')) || [];
}

function saveAppointments(apps) {
    localStorage.setItem('barberAppointments', JSON.stringify(apps));
    renderDashboard();
    updateStaffBadges();
}

// Update appointment counter badges on Staff Selection Screen
function updateStaffBadges() {
    const apps = getAppointments();

    const allCount = apps.length;
    const ahmetCount = apps.filter(a => matchesStaff(a, 'Ahmet (Master Barber)')).length;
    const canCount = apps.filter(a => matchesStaff(a, 'Can (Beard & Style)')).length;
    const elenaCount = apps.filter(a => matchesStaff(a, 'Elena (Balayage Expert)')).length;
    const aylinCount = apps.filter(a => matchesStaff(a, 'Aylin (Styling & Cut)')).length;

    if (document.getElementById('badgeAllCount')) document.getElementById('badgeAllCount').textContent = `${allCount} Randevu`;
    if (document.getElementById('badgeAhmetCount')) document.getElementById('badgeAhmetCount').textContent = `${ahmetCount} Randevu`;
    if (document.getElementById('badgeCanCount')) document.getElementById('badgeCanCount').textContent = `${canCount} Randevu`;
    if (document.getElementById('badgeElenaCount')) document.getElementById('badgeElenaCount').textContent = `${elenaCount} Randevu`;
    if (document.getElementById('badgeAylinCount')) document.getElementById('badgeAylinCount').textContent = `${aylinCount} Randevu`;
}

function matchesStaff(app, staffKey) {
    if (staffKey === 'ALL') return true;
    const barber = app.barber || '';
    if (staffKey.includes('Ahmet')) return barber.includes('Ahmet') || barber === 'Berber 1';
    if (staffKey.includes('Can')) return barber.includes('Can') || barber === 'Berber 2';
    if (staffKey.includes('Elena')) return barber.includes('Elena') || barber.includes('Stylistin 1');
    if (staffKey.includes('Aylin')) return barber.includes('Aylin') || barber.includes('Stylistin 2');
    return barber === staffKey;
}

// Initialize Active Staff Profile View
function initActiveProfile(staffKey) {
    currentActiveStaff = staffKey;
    const prof = STAFF_PROFILES[staffKey] || STAFF_PROFILES['ALL'];

    // Update Avatar in banner
    const avatarBox = document.getElementById('activeStaffAvatar');
    if (avatarBox) {
        if (prof.photo) {
            avatarBox.innerHTML = `
                <img src="${prof.photo}" alt="${prof.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                <div style="display:none; width:100%; height:100%; align-items:center; justify-content:center;">${prof.icon}</div>
            `;
        } else {
            avatarBox.innerHTML = prof.icon;
        }
    }

    // Update Name, Subtitle, Badge
    const nameEl = document.getElementById('activeStaffName');
    const subEl = document.getElementById('activeStaffSub');
    const badgeEl = document.getElementById('activeStaffBadge');

    if (nameEl) nameEl.textContent = prof.key === 'ALL' ? prof.name : `${prof.name} (${prof.role})`;
    if (subEl) subEl.textContent = prof.sub;
    if (badgeEl) {
        badgeEl.textContent = prof.section;
        badgeEl.className = `staff-type-badge ${prof.badgeClass}`;
    }

    // Show/Hide Gender and Barber dropdown filters for General Admin
    const genderSel = document.getElementById('genderFilter');
    const barberSel = document.getElementById('barberFilter');
    if (genderSel && barberSel) {
        if (staffKey === 'ALL') {
            genderSel.style.display = 'inline-block';
            barberSel.style.display = 'inline-block';
        } else {
            genderSel.style.display = 'none';
            barberSel.style.display = 'none';
            genderSel.value = 'ALL';
            barberSel.value = 'ALL';
        }
    }

    // Label texts in stat cards
    const isPersonal = staffKey !== 'ALL';
    if (document.getElementById('lblStatTotal')) document.getElementById('lblStatTotal').textContent = isPersonal ? 'Toplam Randevum' : 'Toplam Randevu';
    if (document.getElementById('lblStatPending')) document.getElementById('lblStatPending').textContent = isPersonal ? 'Bekleyen Randevularım' : 'Bekleyen Randevular';
    if (document.getElementById('lblStatApproved')) document.getElementById('lblStatApproved').textContent = isPersonal ? 'Onaylanan Randevularım' : 'Onaylanan Randevular';
    if (document.getElementById('lblStatToday')) document.getElementById('lblStatToday').textContent = isPersonal ? 'Bugünkü Randevularım' : 'Bugünün Randevuları';

    renderDashboard();
}

function renderDashboard() {
    const apps = getAppointments();

    // 1. Filter by Active Staff Profile
    const staffFiltered = apps.filter(a => matchesStaff(a, currentActiveStaff));

    // 2. Calculate Statistics
    const todayStr = new Date().toISOString().split('T')[0];
    const totalCount = staffFiltered.length;
    const pendingCount = staffFiltered.filter(a => a.status === 'Bekliyor').length;
    const approvedCount = staffFiltered.filter(a => a.status === 'Onaylandı').length;
    const todayCount = staffFiltered.filter(a => a.date === todayStr).length;

    if (document.getElementById('statTotalCount')) document.getElementById('statTotalCount').textContent = totalCount;
    if (document.getElementById('statPendingCount')) document.getElementById('statPendingCount').textContent = pendingCount;
    if (document.getElementById('statApprovedCount')) document.getElementById('statApprovedCount').textContent = approvedCount;
    if (document.getElementById('statTodayCount')) document.getElementById('statTodayCount').textContent = todayCount;

    // 3. User Filters
    const searchVal = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
    const dateVal = document.getElementById('dateFilter')?.value || '';
    const genderVal = document.getElementById('genderFilter')?.value || 'ALL';
    const barberVal = document.getElementById('barberFilter')?.value || 'ALL';
    const statusVal = document.getElementById('statusFilter')?.value || 'ALL';

    const filtered = staffFiltered.filter(app => {
        const matchesSearch = !searchVal || 
            (app.name && app.name.toLowerCase().includes(searchVal)) || 
            (app.phone && app.phone.toLowerCase().includes(searchVal)) ||
            (app.service && app.service.toLowerCase().includes(searchVal)) ||
            (app.barber && app.barber.toLowerCase().includes(searchVal));

        const matchesDate = !dateVal || app.date === dateVal;

        const appGender = app.gender || (app.barber?.includes('Stylistin') || app.barber?.includes('Elena') || app.barber?.includes('Aylin') ? 'Damen' : 'Herren');
        const matchesGender = genderVal === 'ALL' || appGender === genderVal;

        const matchesBarber = barberVal === 'ALL' || matchesStaff(app, barberVal);

        const matchesStatus = statusVal === 'ALL' || app.status === statusVal;

        return matchesSearch && matchesDate && matchesGender && matchesBarber && matchesStatus;
    });

    // Sort newest date & time first
    filtered.sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.time}`);
        const dateB = new Date(`${b.date}T${b.time}`);
        return dateB - dateA;
    });

    // 4. Render Table Rows
    const tbody = document.getElementById('appointmentsTableBody');
    if (!tbody) return;

    if (filtered.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="9">
                    <div class="empty-table-state">
                        <i class="fa-solid fa-calendar-xmark"></i>
                        <p>Bu filtreye uygun randevu kaydı bulunamadı.</p>
                    </div>
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = filtered.map(app => {
        let statusBadgeClass = 'status-bekliyor';
        if (app.status === 'Onaylandı') statusBadgeClass = 'status-onaylandi';
        if (app.status === 'Storniert') statusBadgeClass = 'status-storniert';

        const formattedDate = formatDateDisplay(app.date);
        const appGender = app.gender || (app.barber?.includes('Stylistin') || app.barber?.includes('Elena') || app.barber?.includes('Aylin') ? 'Damen' : 'Herren');
        
        let staffDisplayName = app.barber || (appGender === 'Damen' ? 'Elena (Balayage Expert)' : 'Ahmet (Master Barber)');
        if (staffDisplayName === 'Berber 1') staffDisplayName = 'Ahmet (Master Barber)';
        if (staffDisplayName === 'Berber 2') staffDisplayName = 'Can (Beard & Style)';
        if (staffDisplayName.includes('Stylistin 1')) staffDisplayName = 'Elena (Balayage Expert)';
        if (staffDisplayName.includes('Stylistin 2')) staffDisplayName = 'Aylin (Styling & Cut)';

        const genderBadgeStyle = appGender === 'Damen' 
            ? 'background: rgba(244, 114, 182, 0.15); color: #f472b6; border: 1px solid rgba(244, 114, 182, 0.3);'
            : 'background: rgba(255, 255, 255, 0.1); color: var(--silver-white); border: 1px solid var(--border-silver);';

        return `
            <tr>
                <td><strong>${formattedDate}</strong> <br><small style="color: var(--cyber-teal);"><i class="fa-regular fa-clock"></i> ${app.time}</small></td>
                <td><span style="${genderBadgeStyle} padding: 0.2rem 0.55rem; border-radius: var(--radius-pill); font-size: 0.72rem; font-weight: 800; text-transform: uppercase;"><i class="${appGender === 'Damen' ? 'fa-solid fa-gem' : 'fa-solid fa-user-tie'}"></i> ${escapeHtml(appGender)}</span></td>
                <td><span style="border: 1px solid var(--border-silver); padding: 0.25rem 0.6rem; border-radius: 2px; font-size: 0.78rem; font-weight: 700; color: var(--silver-white); background: rgba(255,255,255,0.05);"><i class="${appGender === 'Damen' ? 'fa-solid fa-wand-magic-sparkles' : 'fa-solid fa-scissors'}"></i> ${escapeHtml(staffDisplayName)}</span></td>
                <td><strong>${escapeHtml(app.name)}</strong></td>
                <td><a href="tel:${escapeHtml(app.phone)}" style="color: var(--text-primary);">${escapeHtml(app.phone)}</a></td>
                <td>${escapeHtml(app.service)}</td>
                <td><small style="color: var(--text-muted);">${escapeHtml(app.notes || '-')}</small></td>
                <td><span class="badge-status ${statusBadgeClass}">${escapeHtml(app.status)}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-icon btn-confirm" onclick="updateStatus(${app.id}, 'Onaylandı')" title="Onayla">
                            <i class="fa-solid fa-check"></i>
                        </button>
                        <button class="btn-icon btn-cancel" onclick="updateStatus(${app.id}, 'Storniert')" title="İptal Et">
                            <i class="fa-solid fa-rotate-left"></i>
                        </button>
                        <button class="btn-icon btn-delete" onclick="deleteAppointment(${app.id})" title="Sil">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function updateStatus(id, newStatus) {
    let apps = getAppointments();
    apps = apps.map(app => {
        if (app.id === id) {
            return { ...app, status: newStatus };
        }
        return app;
    });
    saveAppointments(apps);
}

function deleteAppointment(id) {
    if (!confirm('Bu randevuyu silmek istediğinizden emin misiniz?')) return;
    let apps = getAppointments();
    apps = apps.filter(app => app.id !== id);
    saveAppointments(apps);
}

function resetFilters() {
    if (document.getElementById('searchInput')) document.getElementById('searchInput').value = '';
    if (document.getElementById('dateFilter')) document.getElementById('dateFilter').value = '';
    if (document.getElementById('genderFilter')) document.getElementById('genderFilter').value = 'ALL';
    if (document.getElementById('barberFilter')) document.getElementById('barberFilter').value = 'ALL';
    if (document.getElementById('statusFilter')) document.getElementById('statusFilter').value = 'ALL';
    renderDashboard();
}

function exportToCSV() {
    const apps = getAppointments();
    const staffFiltered = apps.filter(a => matchesStaff(a, currentActiveStaff));

    if (staffFiltered.length === 0) {
        alert('İndirilecek randevu kaydı bulunmamaktadır.');
        return;
    }

    let csvContent = "data:text/csv;charset=utf-8,\uFEFF"; // UTF-8 BOM
    csvContent += "ID;Tarih;Saat;Bölüm;Personel;Müşteri Adı;Telefon;Hizmet;Notlar;Durum\n";

    staffFiltered.forEach(a => {
        const appGender = a.gender || (a.barber?.includes('Stylistin') || a.barber?.includes('Elena') || a.barber?.includes('Aylin') ? 'Damen' : 'Herren');
        const staff = a.barber || (appGender === 'Damen' ? 'Elena (Balayage Expert)' : 'Ahmet (Master Barber)');

        const row = [
            a.id,
            a.date,
            a.time,
            `"${appGender}"`,
            `"${staff.replace(/"/g, '""')}"`,
            `"${(a.name || '').replace(/"/g, '""')}"`,
            `"${(a.phone || '').replace(/"/g, '""')}"`,
            `"${(a.service || '').replace(/"/g, '""')}"`,
            `"${(a.notes || '').replace(/"/g, '""')}"`,
            a.status
        ].join(";");
        csvContent += row + "\n";
    });

    const profName = currentActiveStaff === 'ALL' ? 'Genel' : currentActiveStaff.split(' ')[0];
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `R8_Friseur_${profName}_Randevular_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function formatDateDisplay(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length === 3) {
        return `${parts[2]}.${parts[1]}.${parts[0]}`;
    }
    return dateStr;
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}


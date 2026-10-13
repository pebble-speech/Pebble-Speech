(() => {
  const data = window.PEBBLE_SAMPLE_DATA;
  const list = document.querySelector("#sample-list");

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const duration = (value) => `${Number(value).toFixed(2)} s`;

  const playerMarkup = (src, seconds, label) => `
    <audio
      class="native-player"
      controls
      preload="metadata"
      src="${escapeHtml(src)}"
      aria-label="${escapeHtml(label)}"
    ></audio>
    <div class="player-footer">
      <span>${duration(seconds)}</span>
      <a class="download-link" href="${escapeHtml(src)}" download>Download</a>
    </div>`;

  const referenceColumn = (sample, row) => `
    <div class="audio-column">
      <div class="method-name"><span>Reference audio</span></div>
      ${playerMarkup(row.reference.audio, row.reference.duration, "reference audio")}
      <p class="reference-description" title="${escapeHtml(sample.referenceText)}">
        ${escapeHtml(sample.referenceText)}
      </p>
    </div>`;

  const methodColumn = (method) => `
    <div class="audio-column ${method.id.startsWith("ours") ? "ours" : ""}">
      <div class="method-name">
        <span>${escapeHtml(method.label)}</span>
        ${method.id.startsWith("ours") ? '<span class="ours-label">Ours</span>' : ""}
      </div>
      ${playerMarkup(method.audio, method.duration, method.label)}
    </div>`;

  const rowMarkup = (sample, row) => `
    <div class="comparison-grid" data-rate-panel="${escapeHtml(row.speed)}">
      ${referenceColumn(sample, row)}
      ${row.methods.map(methodColumn).join("")}
    </div>`;

  const speedButtons = (sample) => {
    if (sample.rows.length === 1) return "";
    return `
      <div class="speed-switcher" role="tablist" aria-label="Target duration rate">
        ${sample.rows
          .map(
            (row, index) => `
              <button
                class="speed-button ${index === 0 ? "active" : ""}"
                type="button"
                role="tab"
                data-rate-button="${escapeHtml(row.speed)}"
                aria-selected="${index === 0 ? "true" : "false"}"
              >${escapeHtml(row.speedLabel)} · ${escapeHtml(row.speed)}×</button>`,
          )
          .join("")}
      </div>`;
  };

  const cardMarkup = (sample) => {
    const initialRow = sample.rows[0];
    return `
      <article class="sample-card" id="${escapeHtml(sample.id)}">
        <div class="condition-bar">
          <span class="condition-item"><strong>Input duration</strong> ${duration(sample.referenceDuration)}</span>
          <span class="condition-item"><strong>Reference</strong> ${escapeHtml(sample.referenceGroup)}</span>
          <span class="condition-item"><strong>Source target</strong> ${duration(sample.sourceTargetDuration)}</span>
          <span class="condition-item" data-condition-rate><strong>Target rate</strong> ${escapeHtml(initialRow.speedLabel)} · ${escapeHtml(initialRow.speed)}×</span>
          <span class="condition-item" data-condition-duration><strong>Requested output</strong> ${duration(initialRow.targetDuration)}</span>
        </div>
        <div class="text-block">
          <span class="text-label">Input text</span>
          <p class="target-text">${escapeHtml(sample.targetText)}</p>
        </div>
        ${speedButtons(sample)}
        <div class="comparison-scroll">
          ${sample.rows
            .map(
              (row, rowIndex) =>
                `<div ${rowIndex === 0 ? "" : "hidden"} data-row-wrapper="${escapeHtml(row.speed)}">${rowMarkup(sample, row)}</div>`,
            )
            .join("")}
        </div>
      </article>`;
  };

  list.innerHTML = data.samples.map(cardMarkup).join("");

  function stopOthers(currentAudio) {
    document.querySelectorAll("audio").forEach((audio) => {
      if (audio !== currentAudio) audio.pause();
    });
  }

  document.querySelectorAll("audio").forEach((audio) => {
    audio.addEventListener("play", () => stopOthers(audio));
  });

  document.querySelectorAll(".sample-card").forEach((card) => {
    const buttons = card.querySelectorAll("[data-rate-button]");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const rate = button.dataset.rateButton;
        const sample = data.samples.find((entry) => entry.id === card.id);
        const row = sample.rows.find((entry) => entry.speed === rate);
        card.querySelectorAll("audio").forEach((audio) => audio.pause());
        buttons.forEach((candidate) => {
          const selected = candidate === button;
          candidate.classList.toggle("active", selected);
          candidate.setAttribute("aria-selected", String(selected));
        });
        card.querySelectorAll("[data-row-wrapper]").forEach((panel) => {
          panel.hidden = panel.dataset.rowWrapper !== rate;
        });
        card.querySelector("[data-condition-rate]").innerHTML = `<strong>Target rate</strong> ${escapeHtml(row.speedLabel)} · ${escapeHtml(row.speed)}×`;
        card.querySelector("[data-condition-duration]").innerHTML = `<strong>Requested output</strong> ${duration(row.targetDuration)}`;
      });
    });
  });

})();
